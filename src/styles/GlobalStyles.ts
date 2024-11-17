"use client";

import { createGlobalStyle, css } from "styled-components";

const styles = css`
  body {
    font-family: "Pop", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
