import React, { ReactEventHandler, useEffect, useState } from 'react';
import { MessageSystem, Message, ImgPreviewer } from './styles';
import LinkPreviewer from '../LinkPreviewer';
import { LinkData, NoParamFunction } from '../../types';

const LinkPreviewService = 'https://ceq3o46njf.execute-api.us-east-1.amazonaws.com/linkpreview?';
const linkRegex = /(?:(?:https?):\/\/|www\.)(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[A-Z0-9+&@#/%=~_|$])/ig;
const imageRegex = /\.(jpe?g|png|bmp|gif|webp)$/;

function getAllUrls(text: string): string[] {
  const matches = text.matchAll(linkRegex);

  if (!matches) {
    return [];
  }

  return Array.from(new Set(
    Array.from(matches).map((item) => item[0]),
  ));
}

interface Props {
  nickname?: string;
  system?: boolean;
  text: string;
  onChange?: ReactEventHandler<HTMLImageElement> | NoParamFunction;
}

const ChatMessages: React.FC<Props> = function ChatMessages({
  nickname = '', system = false, text, onChange,
}) {
  const [rawHTML, setRawHTML] = useState(text);
  const [linkData, setLinkData] = useState<LinkData | undefined>(undefined);
  const [imagePreviewSrc, setImagePreviewSrc] = useState('');

  useEffect(() => {
    const links = getAllUrls(text).filter((url) => !imageRegex.test(url));
    if (links.length) {
      const url = LinkPreviewService + new URLSearchParams({
        link: links[0],
      });

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setLinkData(data);
        });
    }
  }, [text]);

  useEffect(() => {
    let auxText = text.toString();

    const links = getAllUrls(auxText);

    links.forEach((url) => {
      if (imageRegex.test(url)) {
        setImagePreviewSrc(url);
        if (auxText === url) {
          auxText = '';
        }
      } else {
        const aLink = `<a href="${url}" target="_blank">${url}</a>`;
        auxText = auxText.replaceAll(url, aLink);
      }
    });

    setRawHTML(auxText);
  }, [text]);

  return (
    system
      ? <MessageSystem>{text}</MessageSystem>
      : (
        <Message className={nickname ? 'other' : 'me'}>
          <h1>
            {nickname || 'me'}
            :
          </h1>
          {
            // eslint-disable-next-line react/no-danger
            <span dangerouslySetInnerHTML={{ __html: rawHTML }} />
          }
          {
            linkData
              ? (
                <LinkPreviewer
                  link={linkData.link}
                  title={linkData.title}
                  imageSrc={linkData.image}
                  description={linkData.description}
                  onLoad={onChange}
                />
              )
              : (imagePreviewSrc
                ? (
                  <a href={imagePreviewSrc} target="_blank" rel="noreferrer">
                    <ImgPreviewer src={imagePreviewSrc} onLoad={onChange} />
                  </a>
                )
                : '')
          }
        </Message>
      )
  );
};

ChatMessages.defaultProps = { nickname: '', system: false, onChange: () => { } };

export default ChatMessages;
