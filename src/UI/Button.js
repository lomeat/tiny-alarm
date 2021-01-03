import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  padding: 16px 40px;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  border: 7px solid #ffe3e1;

  &:hover {
    cursor: pointer;
    box-shadow: inset 5px 5px rgba(0, 0, 0, 0.5), 5px 5px rgba(0, 0, 0, 0.5);
    text-shadow: 5px 5px rgba(0, 0, 0, 0.5);
  }

  :last-child {
    margin-left: 20px;
  }
`;
