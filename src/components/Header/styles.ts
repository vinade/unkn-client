import styled from 'styled-components';

const Container = styled.div`
    margin: 0 20px;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    border-bottom: 1px solid ${(props) => props.theme.colors.backgroundPrimary};
    box-shadow: 0 5px 10px -10px ${(props) => props.theme.colors.backgroundPrimary};
`;

const Logo = styled.img`
    display: inline-block;
    margin: 0 10px;
    height: 32px;
    width: 32px;
`;

const H1 = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-weight: 800;
    font-size: 20pt;
    display: flex;
    align-items: center;
`;

export {
  Container,
  Logo,
  H1,
};
