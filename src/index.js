import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { createGlobalStyle } from "styled-components";

import { App } from "./App";

WebFont.load({
  google: {
    families: ["Barlow Condensed:400,700"],
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #f15a51;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  * {
    font-family: "Barlow Condensed", sans-serif;
    user-select: none;
    color: #ffe3e1;
    outline: none;
    font-weight: bold;
    transition: 0.2s ease;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
