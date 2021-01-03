import React from "react";
import styled from "styled-components";

import { TimeValueButton } from "./ui/TimeValueButton";
import { SelectTimeModal } from "./SelectTimeModal";
import { getHours, times } from "./utils";

export const ClockTime = ({ alarmTime, setAlarmTime }) => {
  const [isTimeSelecting, setIsTimeSelecting] = React.useState(false);
  const [selectTimeUnits, setSelectTimeUnits] = React.useState(getHours());

  const closeModal = (name, value) => {
    setAlarmTime((state) => ({ ...state, [name]: value }));
    setIsTimeSelecting(false);
  };

  const openModal = (name) => {
    setSelectTimeUnits(times[name]);
    setIsTimeSelecting(true);
  };

  return (
    <>
      <Wrapper>
        <TimeValueButton onClick={() => openModal("hours")}>
          {alarmTime.hour}
        </TimeValueButton>
        {":"}
        <TimeValueButton onClick={() => openModal("minutes")}>
          {alarmTime.minute}
        </TimeValueButton>
      </Wrapper>

      {isTimeSelecting && (
        <SelectTimeModal units={selectTimeUnits} closeModal={closeModal} />
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-size: 200px;
  justify-content: center;
  padding-bottom: 60px;
`;
