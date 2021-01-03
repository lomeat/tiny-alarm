import React from "react";

import { ControlPanel } from "./ControlPanel";
import { ClockTime } from "./ClockTime";
import { AlarmModal } from "./AlarmModal";
import { times } from "./utils";

export const App = () => {
  const [alarmTime, setAlarmTime] = React.useState(
    JSON.parse(localStorage.getItem("alarm-time")) || {
      hour: times.hours[0],
      minute: times.minutes[0],
    }
  );
  const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);
  const [isAlarmActive, setIsAlarmActive] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState("");

  React.useEffect(() => {
    const clock = setInterval(() => updateCurrentTime(), 1000);

    return () => {
      clearInterval(clock);
    };
  });

  const updateCurrentTime = () => {
    setCurrentTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
  };

  const audioRef = React.useRef();

  const playMusic = () => {
    audioRef.current.play();
    setIsMusicPlaying(true);
  };

  const stopMusic = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsMusicPlaying(false);
  };

  const toggleMusicPlaying = () => {
    isMusicPlaying ? stopMusic() : playMusic();
  };

  const toggleAlarmModal = () => {
    setIsAlarmActive((state) => !state);
  };

  return (
    <>
      <ClockTime alarmTime={alarmTime} setAlarmTime={setAlarmTime} />
      <ControlPanel
        isMusicPlaying={isMusicPlaying}
        toggleMusicPlaying={toggleMusicPlaying}
        audioRef={(e) => (audioRef.current = e)}
        toggleAlarmModal={toggleAlarmModal}
      />
      {isAlarmActive && (
        <AlarmModal
          time={alarmTime}
          toggleAlarmModal={toggleAlarmModal}
          stopMusic={stopMusic}
          playMusic={playMusic}
          currentTime={currentTime}
        />
      )}
    </>
  );
};
