import { COLORS } from "@/theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul,
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  li {
    margin: 0;
    padding: 0;
    color: ${COLORS.white};
  }

  body {
    font-family: Roboto, sans-serif;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    background-color: ${COLORS.bgc};
  }

  ul {
    list-style: none;
  }
  p{
    font-size: 14px;
  }

  a {
  color: inherit;
  text-decoration: none;
  font-size: 14px;
  :hover {
    color: ${COLORS.primary};
  }
}

  img {
    max-width: 100%;
    display: block;
  }


  `;
