import React from "react";
import styled from "styled-components";

import { ControlPanel } from "./ControlPanel";

export const App = () => {
  const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);

  return (
    <>
      <ControlPanel
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />
    </>
  );
};
