import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.primary};
  `}
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(25)}px;
    color: ${theme.colors.black};
  `};
`;

export const InvibleView = styled.View`
  width: 32px;
  height: 32px;
  background-color: transparent;
`;

export const ViewTask = styled.ScrollView`
  width: 100%;
  padding-top: 30px;
  padding-start: 20px;
  padding-end: 20px;
`;

export const TitleTask = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.black};
  `};
`;

export const ContentTask = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.black};
    padding-top: 20px;
    padding-bottom: 40px;
  `};
`;

export const TouchEvent = styled.TouchableOpacity`

`;

export const TouchDeleteTask = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  padding: 6px 18px;
`;

export const DeleteTask = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.orange};
  `};
`;

export const CompleteTask = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.white};
  `};
`;

export const Footer = styled.View`
  margin-start: 40px;
  margin-end: 40px;
  margin-bottom: 25px;
  padding-top: 10px;
`;


