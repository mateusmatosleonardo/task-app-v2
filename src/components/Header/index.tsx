import React from 'react';
import * as S from './styles';
import { HeaderProps } from './types';

const Header = ({ children, style }: HeaderProps) => {
  return (
    <S.Container style={style}>
      {children}
    </S.Container>
  )
}

export default Header;