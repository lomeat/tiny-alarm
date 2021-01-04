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
    const timer = setInterval(() => {
      setRestTime(getRestTime(alarmTimeStr));
      // setRestTime(getRestTime("07:52:40")); debug

      if (restTime === "00:00:00") {
        clearInterval(timer);
        playMusic();
        setRestTime("00:00:00");
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const closeModal = () => {
    toggleAlarmModal();
    stopMusic();
  };

  return (
    <Modal background="black">
      <TimeWrapper>
        <TimeHM>{getTimeHM(restTime)}</TimeHM>
        <TimeS>{getTimeS(restTime)}</TimeS>
      </TimeWrapper>
      <StButton onClick={closeModal}>reset alarm</StButton>
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

const StButton = styled(Button)`
  color: #555;
  border-color: #555;
`;
