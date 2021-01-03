import React from "react";
import styled from "styled-components";

import { Button } from "./UI/Button";
import { ChooseMusicButton } from "./UI/ChooseMusicButton";
import sample from "./music/Click me to browse music.mp3";

export const ControlPanel = ({ isMusicPlaying, setIsMusicPlaying }) => {
  const [music, setMusic] = React.useState(sample);
  const [musicName, setMusicName] = React.useState("Click me to browse music");

  const audioRef = React.useRef();

  const uploadMusic = (e) => {
    e.preventDefault();
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    const musicURL = URL.createObjectURL(e.target.files[0]);

    setIsMusicPlaying(false);
    setMusic(musicURL);
    setMusicName(e.target.files[0].name.split(".mp3")[0]);

    e.onend = () => {
      URL.revokeObjectURL(e.target.src);
    };
  };

  const toggleMusicPlaying = () => {
    if (isMusicPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying((state) => !state);
  };

  return (
    <Wrapper>
      <ButtonsWrapper>
        <Button onClick={toggleMusicPlaying}>
          {isMusicPlaying ? "stop" : "play"} music
        </Button>
        <Button>start alarm</Button>
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
