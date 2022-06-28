import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    flex-grow: 1;
    padding: 0 20px;

    max-height: calc(100% - 140px);
    overflow-y: auto;

    & > :first-child {
        margin-top: auto;
    }
`;
