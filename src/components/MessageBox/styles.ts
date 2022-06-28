import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    font-family: Manrope, sans-serif;
    display: flex;
    justify-content: space-between;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    border-top: 1px solid ${(props) => props.theme.colors.backgroundPrimary};
    box-shadow: 0 -5px 10px -10px ${(props) => props.theme.colors.backgroundPrimary};
    padding-top: 5px;
    margin: 0 20px;

    textarea {
        font-family: Manrope, sans-serif;
        height: 60px;
        resize: none;
        outline: none;
        padding: 10px;
        border: 0;
        flex-grow: 1;
        margin: 5px 0;
        background: 0;
        background-color: ${(props) => props.theme.colors.backgroundSecondary};
        color: ${(props) => props.theme.colors.text};
    }

    button {
        font-family: Manrope, sans-serif;
        cursor: pointer;
        padding: 5px;
        border-radius: 5px;
        margin: 5px 0 5px 5px;
        width: 100px;
        border: 0;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.primary};
        font-weight: bold;
        font-size: 14px;


        &:hover {
            background-color: ${(props) => props.theme.colors.backgroundPrimary};
        }
    }
`;

const TypingStatus = styled.div`
    font-size: 12px;
    font-weight: 800;
    padding: 3px;
    position: absolute;
    top: -20px;
`;

export {
  Container,
  TypingStatus,
};
