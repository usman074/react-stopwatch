function timeFormatte(time) {
  const _time = time;
  const hours = _time / (1000 * 60 * 60);
  let absoluteHours = Math.floor(hours);
  const minutes = (hours - absoluteHours) * 60;
  let absoluteMinutes = Math.floor(minutes);
  const seconds = (minutes - absoluteMinutes) * 60;
  let absoluteSeconds = Math.floor(seconds);
  const milliseconds = seconds - absoluteSeconds;
  let absoluteMilliseconds = milliseconds.toString();
  if (absoluteMilliseconds.includes(".")) {
    absoluteMilliseconds = absoluteMilliseconds.substr(
      2,
      absoluteMilliseconds.length
    );
  }

  if (absoluteMilliseconds.length > 3) {
    absoluteMilliseconds = absoluteMilliseconds.substr(0, 3);
  }

  if (absoluteHours.toString().length < 2) {
    absoluteHours = "0" + absoluteHours;
  }
  if (absoluteMinutes.toString().length < 2) {
    absoluteMinutes = "0" + absoluteMinutes;
  }

  if (absoluteSeconds.toString().length < 2) {
    absoluteSeconds = "0" + absoluteSeconds;
  }

  while (absoluteMilliseconds.length < 3) {
    absoluteMilliseconds = "0" + absoluteMilliseconds;
  }

  return (
    absoluteHours +
    " : " +
    absoluteMinutes +
    " : " +
    absoluteSeconds +
    " . " +
    absoluteMilliseconds
  );
}

export function timeFormatter(time) {
  const { absoluteHours, timeDiff: hoursDiff } = getTime(
    time,
    true,
    1000 * 60 * 60
  );
  const {
    absoluteremainingTime: absoluteMinutes,
    remainingTimeDiff: minDiff,
  } = getTime(hoursDiff, false, 60);
  const {
    absoluteremainingTime: absoluteSeconds,
    remainingTimeDiff: secDiff,
  } = getTime(minDiff, false, 60);
  let absoluteMilliseconds = parseInt(secDiff * 1000).toString();
  if (absoluteMilliseconds === "0") {
    absoluteMilliseconds = "00" + absoluteMilliseconds;
  }
  return `${absoluteHours} :
    ${absoluteMinutes} :
    ${absoluteSeconds} .
    ${absoluteMilliseconds}`;
}
function getTime(time, hours, value) {
  const _time = time;
  if (hours) {
    const hours = _time / value;
    let absoluteHours = Math.floor(hours);
    const timeDiff = hours - absoluteHours;
    if (absoluteHours.toString().length < 2) {
      absoluteHours = "0" + absoluteHours;
    }
    return { absoluteHours, timeDiff };
  }
  const remainingTime = _time * value;
  let absoluteremainingTime = Math.floor(remainingTime);
  const remainingTimeDiff = remainingTime - absoluteremainingTime;
  if (absoluteremainingTime.toString().length < 2) {
    absoluteremainingTime = "0" + absoluteremainingTime;
  }
  return { absoluteremainingTime, remainingTimeDiff };
}
