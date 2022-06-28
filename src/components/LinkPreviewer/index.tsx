import React, { useEffect, ReactEventHandler } from 'react';
import { NoParamFunction } from '../../types';
import { Container, MessageLink } from './styles';

interface Props {
    link: string;
    title?: string;
    imageSrc?: string;
    description?: string;
    onLoad?: ReactEventHandler<HTMLImageElement> | NoParamFunction;
}

const LinkPreviewer: React.FC<Props> = function LinkPreviewer({
  link, title = '', imageSrc = '', description = '', onLoad = (() => {}),
}) {
  const valid = title || imageSrc || description;

  useEffect(() => {
    if (!imageSrc && onLoad) {
      (onLoad as NoParamFunction)();
    }
  }, []);

  return (
    valid
      ? (
        <MessageLink href={link} target="_blank">
          <Container>
            {imageSrc ? <img src={imageSrc} onLoad={onLoad} alt="preview" /> : ''}
            <article>
              {title ? <h1>{title}</h1> : ''}
              <p>{description || ''}</p>
            </article>
          </Container>
        </MessageLink>
      )
      : <p>...</p>
  );
};

LinkPreviewer.defaultProps = {
  title: '',
  imageSrc: '',
  description: '',
  onLoad: () => { },
};

export default LinkPreviewer;
