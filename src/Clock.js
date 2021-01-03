import React from "react";
import styled from "styled-components";

const time = {
  hours: Array.from({ length: 24 }, (a, i) => (i < 10 ? "0" + i : i)),
  minutes: Array.from({ length: 12 }, (a, i) =>
    i * 5 < 10 ? "0" + i * 5 : i * 5
  ),
};

export const Clock = () => {
  const [hour, setHour] = React.useState(time.hours[2]);
  const [minute, setMinute] = React.useState(time.minutes[10]);

  return (
    <Wrapper>
      <Value>{hour}</Value>
      <Colon>:</Colon>
      <Value>{minute}</Value>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-size: 200px;
  justify-content: center;
  padding-bottom: 60px;
`;

const Value = styled.button`
  border: 0;
  background: transparent;
  outline: none;
  font-size: 200px;

  &:hover {
    cursor: pointer;
    text-shadow: 5px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Colon = styled.span``;
