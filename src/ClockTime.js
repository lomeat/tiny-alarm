import React from "react";
import styled from "styled-components";

import { TimeValueButton } from "./ui/TimeValueButton";

const time = {
  hours: Array.from({ length: 24 }, (a, i) => (i < 10 ? "0" + i : i)),
  minutes: Array.from({ length: 12 }, (a, i) =>
    i * 5 < 10 ? "0" + i * 5 : i * 5
  ),
};

export const ClockTime = () => {
  const [hour, setHour] = React.useState(time.hours[2]);
  const [minute, setMinute] = React.useState(time.minutes[10]);

  return (
    <Wrapper>
      <TimeValueButton>{hour}</TimeValueButton>
      {":"}
      <TimeValueButton>{minute}</TimeValueButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-size: 200px;
  justify-content: center;
  padding-bottom: 60px;
`;
