import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    padding-top: 30px;
    padding-start: 20px;
    padding-end: 20px
    background-color: ${theme.colors.primary};
  `}
`;

export const Profile = styled.View`
  width: 60px;
  height: 60px;
`;

export const PhotoProfile = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.black};
    font-size: ${RFValue(21)}px;
    margin-top: ${RFValue(21)}px;
  `};
`;