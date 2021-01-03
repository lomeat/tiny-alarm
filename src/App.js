import React from "react";

import { ControlPanel } from "./ControlPanel";
import { Clock } from "./Clock";

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
      <Clock />
      <ControlPanel
        isMusicPlaying={isMusicPlaying}
        toggleMusicPlaying={toggleMusicPlaying}
        audioRef={(e) => (audioRef.current = e)}
      />
    </>
  );
};
