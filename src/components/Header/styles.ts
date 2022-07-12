import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({theme}) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;