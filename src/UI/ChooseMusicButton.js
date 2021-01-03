import React from "react";
import styled from "styled-components";

export const ChooseMusicButton = ({ musicName, onChange }) => {
  return (
    <>
      <Wrapper>
        {musicName}
        <Input accept="audio/*" type="file" onChange={(e) => onChange(e)} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.label`
  font-size: 40px;
  text-overflow: ellipsis;
  text-align: center;
  transition: 0.2s ease;
  border: 0px;
  background: transparent;

  &:hover {
    text-shadow: 5px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

const Input = styled.input`
  display: none;
`;
