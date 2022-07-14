import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const ContainerTask = styled.View`
  ${({theme}) => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${RFValue(12)}px;
    border-radius: 6px;
    background-color: ${theme.colors.white};
`};
`;

export const TitleTask = styled.Text`
  ${({theme}) => css`
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.regular}
    color: ${theme.colors.black};
`};
`;

export const CreationDate = styled.Text`
  ${({theme}) => css`
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.regular}
    color: #B7B7B7;
`};
`;