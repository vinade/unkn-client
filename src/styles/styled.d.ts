import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            info: string;
            background: string;
            backgroundPrimary: string;
            backgroundSecondary: string;
            text: string;
        };

        images: {
            logo: string;
        }
    }
}
