import React from 'react';
import * as S from './styles';

interface HeaderProps {
  children: React.ReactNode
  style?: any;
}

const Header = ({children, style}: HeaderProps) => {
    return (
      <S.Container style={style}>
        {children}
      </S.Container>
    )
}

export default Header;