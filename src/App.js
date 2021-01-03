import React from "react";

import { ControlPanel } from "./ControlPanel";
import { ClockTime } from "./ClockTime";
import { AlarmModal } from "./AlarmModal";
import { times } from "./utils";

export const App = () => {
  const [alarmTime, setAlarmTime] = React.useState({
    hour: times.hours[0],
    minute: times.minutes[0],
  });
  const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);
  const [isAlarmActive, setIsAlarmActive] = React.useState(true);

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

  const toggleAlarmStart = () => {
    setIsAlarmActive((state) => !state);
  };

  return (
    <>
      <ClockTime alarmTime={alarmTime} setAlarmTime={setAlarmTime} />
      <ControlPanel
        isMusicPlaying={isMusicPlaying}
        toggleMusicPlaying={toggleMusicPlaying}
        audioRef={(e) => (audioRef.current = e)}
        toggleAlarmStart={toggleAlarmStart}
      />
      {isAlarmActive && (
        <AlarmModal
          time={alarmTime}
          toggleAlarmStart={toggleAlarmStart}
          audioRef={(el) => (audioRef.current = el)}
        />
      )}
    </>
  );
};
