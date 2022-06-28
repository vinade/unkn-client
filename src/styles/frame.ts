import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 500px;
    margin: 0 auto;
    padding: 10px 0;
    background-color: ${(props) => props.theme.colors.background};
`;
