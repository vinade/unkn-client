import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, Logo, H1 } from './styles';
import Switch from '../Switch';
import { ThemeNames } from '../../styles/themes';
import { NoParamFunction } from '../../types';

interface Props {
    toggleTheme: NoParamFunction;
}

const Header: React.FC<Props> = function Header({ toggleTheme }) {
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      <H1>
        <Logo src={themeContext.images.logo} />
        unkn
      </H1>
      <Switch onChange={toggleTheme} initialValue={(themeContext.title === ThemeNames.dark)} />
    </Container>
  );
};

export default Header;
