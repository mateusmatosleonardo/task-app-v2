import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

export function Button({ style, onPress, children }: TouchableOpacityProps) {
  return (
    <S.Container style={style} onPress={onPress} activeOpacity={0.8}>
      {children}
    </S.Container>
  );
}