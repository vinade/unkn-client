import styled from 'styled-components';

const Message = styled.div`
    padding: 2px 10px;
    width: 100%;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.text};
    margin: 2px 0;
    font-size: 12px;
    letter-spacing: 0.5px;
    overflow-wrap: anywhere;

    &.other {
        text-align: right;
    }

    h1 {
        font-weight: 800;
        font-size: 14px;
        padding: 0;
        margin: 0;
        margin-bottom: 1px;
    }

    a {
        color: ${(props) => props.theme.colors.primary};
    }
`;

const MessageSystem = styled.div`
    padding: 10px;
    text-align: center;
    width: 50%;
    margin: 5px auto;
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.secondary};
`;

const ImgPreviewer = styled.img`
    max-height: 100%;
    max-width: 100%;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

export {
  Message,
  MessageSystem,
  ImgPreviewer,
};
