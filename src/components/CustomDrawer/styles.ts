import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const ContainerDrawer = styled.View`
  flex: 1;
`;

export const ContainerInformation = styled.View`
  padding: 12px 12px 22px 12px;
  margin-bottom: 22px;
  border-bottom-width: 1px;
  border-bottom-color: #dedede;
`;

export const PhotoProfile = styled.Image`
  width: 84px;
  height: 84px;
  border-radius: 42px;
`;

export const Name = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.black};
    padding-top: ${RFValue(12)}px;
  `};
`;

export const NumberOfTasks = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.orange};
    padding-top: ${RFValue(6)}px;
  `};
`;