import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: ${(props) => (props.background ? props.background : "#f15a51")};
`;
