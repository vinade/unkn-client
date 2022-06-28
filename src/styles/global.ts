import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing:border-box;
    }

    #root, body {
       margin: 0;
       height: 100vh;
       outline:0;
       font-family: 'Manrope', 'Segoe UI', 'Roboto', 'Oxygen',
         'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
         sans-serif;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       background-color: ${(props) => props.theme.colors.backgroundPrimary}
   }
`;
