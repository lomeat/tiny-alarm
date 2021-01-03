import React from "react";
import styled from "styled-components";

import { TimeValueButton } from "./ui/TimeValueButton";
import { SelectTimeModal } from "./SelectTimeModal";

const times = {
  hours: Array.from({ length: 24 }, (a, i) => (i < 10 ? "0" + i : i)),
  minutes: Array.from({ length: 12 }, (a, i) =>
    i * 5 < 10 ? "0" + i * 5 : i * 5
  ),
};

export const ClockTime = () => {
  const [currentTime, setCurrentTime] = React.useState({
    hour: times.hours[0],
    minute: times.minutes[0],
  });
  const [isTimeSelecting, setIsTimeSelecting] = React.useState(false);
  const [selectTimeUnits, setSelectTimeUnits] = React.useState(times.hours);

  const closeModal = (name, value) => {
    setCurrentTime((state) => ({ ...state, [name]: value }));
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
          {currentTime.hour}
        </TimeValueButton>
        {":"}
        <TimeValueButton onClick={() => openModal("minutes")}>
          {currentTime.minute}
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
