import React from "react";

import { ControlPanel } from "./ControlPanel";

export const App = () => {
  const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);

  const audioRef = React.useRef();

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
    <>
      <ControlPanel
        isMusicPlaying={isMusicPlaying}
        toggleMusicPlaying={toggleMusicPlaying}
        audioRef={(e) => (audioRef.current = e)}
      />
    </>
  );
};
