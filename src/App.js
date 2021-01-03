import React from "react";
import styled from "styled-components";

import { Button } from "./Button";

export const App = () => {
  return (
    <Controls>
      <Button>play music</Button>
      <Button>start alarm</Button>
    </Controls>
  );
};

const Controls = styled.div`
  display: flex;
`;
