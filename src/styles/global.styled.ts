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
  }

  body {
    font-family: Poppins, sans-serif;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  ul {
    list-style: none;
  }

  a {
  color: inherit;
  text-decoration: none;
}


  img {
    max-width: 100%;
    display: block;
  }


  `;
