import theme from "../global/index";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}