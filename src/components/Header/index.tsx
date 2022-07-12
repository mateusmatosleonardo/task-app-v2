import React from 'react';
import * as S from './styles';

interface HeaderProps {
  children: React.ReactNode
}

const Header = ({children}: HeaderProps) => {
    return (
      <S.Container>
        {children}
      </S.Container>
    )
}

export default Header;