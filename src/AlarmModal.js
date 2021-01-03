import React from "react";
import styled from "styled-components";

import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { getDifferenceBetweenTimes } from "./utils";

export const AlarmModal = ({ time, toggleAlarmStart, audioRef }) => {
  const [currentTime, setCurrentTime] = React.useState("");
  const [alarmTime, setAlarmTime] = React.useState(
    `${time.hour}:${time.minute}:00`
  );
  const [restTime, setRestTime] = React.useState("07:34:02");

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
    const rest = getDifferenceBetweenTimes(currentTime, alarmTime);
    setRestTime(rest.join(":"));
  };

  const closeModal = () => {
    setRestTime(null);
    toggleAlarmStart();
    if (audioRef.currentTime > 0) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <Modal background="black">
      <TimeText>{restTime}</TimeText>
      <Button
        onClick={closeModal}
        style={{ color: "#555", borderColor: "#555" }}
      >
        reset alarm
      </Button>
    </Modal>
  );
};

const TimeText = styled.span`
  font-size: 300px;
  color: #ddd;
`;
