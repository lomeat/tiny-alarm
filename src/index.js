import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { createGlobalStyle } from "styled-components";

import { App } from "./App";

WebFont.load({
  google: {
    families: ["Barlow Condensed:400,600"],
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  * {
    font-family: "Barlow Condensed", sans-serif;
    user-select: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
