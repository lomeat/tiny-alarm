import React from "react";
import styled from "styled-components";

import { TimeValueButton } from "./ui/TimeValueButton";

export const SelectTimeModal = ({ units, closeModal }) => {
  const unitName = units.length > 12 ? "hour" : "minute";

  return (
    <Wrapper>
      <Grid>
        {units.map((unitValue) => (
          <TimeValueButton onClick={() => closeModal(unitName, unitValue)}>
            {unitValue}
          </TimeValueButton>
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: #f15a51;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  font-size: 100px;
`;
