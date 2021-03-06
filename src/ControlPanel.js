import React from "react";
import styled from "styled-components";

import { Button } from "./shared/Button";
import { ChooseMusicButton } from "./shared/ChooseMusicButton";
import sample from "./music/Click me to browse music.mp3";

export const ControlPanel = ({
  isMusicPlaying,
  toggleMusicPlaying,
  audioRef,
  toggleAlarmModal,
}) => {
  const [music, setMusic] = React.useState(sample);
  const [musicName, setMusicName] = React.useState("Click me to browse music");

  const uploadMusic = (e) => {
    e.preventDefault();

    const musicURL = URL.createObjectURL(e.target.files[0]);
    const musicNewName = e.target.files[0].name.split(".mp3")[0];
    setMusic(musicURL);
    setMusicName(musicNewName);

    e.onend = () => {
      URL.revokeObjectURL(e.target.src);
    };
  };

  return (
    <Wrapper>
      <ButtonsWrapper>
        <Button onClick={toggleMusicPlaying}>
          {isMusicPlaying ? "stop" : "play"} music
        </Button>
        <Button onClick={toggleAlarmModal}>start alarm</Button>
      </ButtonsWrapper>
      <ChooseWrapper>
        <ChooseMusicButton musicName={musicName} onChange={uploadMusic} />
        <audio src={music} ref={audioRef} />
      </ChooseWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const ChooseWrapper = styled.div`
  padding-top: 40px;
  margin: 0 auto;
`;
