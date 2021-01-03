import React from "react";
import styled from "styled-components";

import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";

export const AlarmModal = ({
  time,
  toggleAlarmModal,
  stopMusic,
  playMusic,
}) => {
  const [currentTime, setCurrentTime] = React.useState("");
  const alarmTime = `${time.hour}:${time.minute}:00`;

  React.useEffect(() => {
    const clock = setInterval(() => updateCurrentTime(), 1000);
    const interval = setInterval(() => checkAlarmClock(), 1000);

    return () => {
      clearInterval(clock);
      clearInterval(interval);
    };
  });

  const updateCurrentTime = () => {
    setCurrentTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
  };

  const checkAlarmClock = () => {
    console.log(currentTime, alarmTime);
    if (currentTime === alarmTime) {
      playMusic();
    }
  };

  const closeModal = () => {
    toggleAlarmModal();
    stopMusic();
  };

  const viewTimeHM = currentTime.split(":").slice(0, 2).join(":");
  const viewTimeS = currentTime.split(":").slice(2).join("");

  return (
    <Modal background="black">
      <TimeWrapper>
        <TimeS style={{ opacity: 0 }}>{viewTimeS}</TimeS>
        <TimeHM>{viewTimeHM}</TimeHM>
        <TimeS>{viewTimeS}</TimeS>
      </TimeWrapper>
      <Button
        onClick={closeModal}
        style={{ color: "#555", borderColor: "#555" }}
      >
        reset alarm
      </Button>
    </Modal>
  );
};

const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 100px;
`;

const TimeHM = styled.span`
  font-size: 360px;
  color: #ddd;
  line-height: 360px;
`;

const TimeS = styled.span`
  padding-left: 10px;
  font-size: 140px;
  line-height: 190px;
  color: #555;
`;
