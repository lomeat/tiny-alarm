import React from "react";
import styled from "styled-components";

import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { getRestTime, getTimeHM, getTimeS } from "./utils";

export const AlarmModal = ({
  alarmTime,
  toggleAlarmModal,
  stopMusic,
  playMusic,
}) => {
  const alarmTimeStr = `${alarmTime.hour}:${alarmTime.minute}:00`;
  const [restTime, setRestTime] = React.useState("");

  React.useEffect(() => {
    const timer = setInterval(() => updateCurrentTime(), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  const updateCurrentTime = () => {
    setRestTime(getRestTime(alarmTimeStr));
    if (restTime === "00:00:00") {
      playMusic();
    }
  };

  const closeModal = () => {
    toggleAlarmModal();
    stopMusic();
  };

  const viewTimeHM = getTimeHM(restTime);
  const viewTimeS = getTimeS(restTime);

  return (
    <Modal background="black">
      <TimeWrapper>
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
  padding-left: 160px;
`;

const TimeS = styled.span`
  padding-left: 10px;
  font-size: 140px;
  line-height: 190px;
  color: #555;
  width: 140px;
`;
