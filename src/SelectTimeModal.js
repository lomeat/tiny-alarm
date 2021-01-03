import React from "react";
import styled from "styled-components";

import { TimeValueButton } from "./ui/TimeValueButton";
import { Modal } from "./ui/Modal";

export const SelectTimeModal = ({ units, closeModal }) => {
  const unitName = units.length > 12 ? "hour" : "minute";

  return (
    <Modal>
      <Grid>
        {units.map((unitValue) => (
          <TimeValueButton onClick={() => closeModal(unitName, unitValue)}>
            {unitValue}
          </TimeValueButton>
        ))}
      </Grid>
    </Modal>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  font-size: 100px;
`;
