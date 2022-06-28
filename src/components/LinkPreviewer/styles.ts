import styled from 'styled-components';

const MessageLink = styled.a`
    text-decoration: none;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    color: ${(props) => props.theme.colors.text};
    align-items: center;

    img {
        max-width: 130px;
        max-height: 130px;
        margin: 5px;
    }

    article {
        flex-grow: 1;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 110px;

        h1 {
            text-align: left;
            font-size: 12px;
            font-weight: 800;
        }

        p {
            font-size: 12px;
            flex-grow: 1;
            text-align: justify;
        }
    }
`;

export {
  Container,
  MessageLink,
};
