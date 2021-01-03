export const getHours = () =>
  Array.from({ length: 24 }, (a, i) => (i < 10 ? "0" + i : i));

export const getMinutes = () =>
  Array.from({ length: 12 }, (a, i) => (i * 5 < 10 ? "0" + i * 5 : i * 5));

export const times = {
  hours: getHours(),
  minutes: getMinutes(),
};

const diffStringNumbers = (a, b) => {
  return Math.abs(b - a).toString();
};

export const getDifferenceBetweenTimes = (startTime, endTime) => {
  const startTimeHMS = startTime.split(":");
  const endTimeHMS = endTime.split(":");

  let restTimeHMS = [];

  for (let a = 0; a < 3; a++) {
    let s = startTimeHMS[a];
    let e = endTimeHMS[a];

    if (a === 0 && s == 0) {
      s = 24;
    }
    if (a === 0 && e == 0) {
      e = 24;
    }
    if ((a === 1 || a === 2) && s == 0) {
      s = 60;
    }
    if ((a === 1 || a === 2) && e == 0) {
      e = 60;
    }

    restTimeHMS.push(diffStringNumbers(s, e));
  }

  return restTimeHMS;
};
