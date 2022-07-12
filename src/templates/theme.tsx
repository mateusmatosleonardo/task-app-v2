import React from "react";
import theme from '../global/index';

import { ThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode | any
}

export function Theme({children}: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}