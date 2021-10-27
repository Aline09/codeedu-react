// Convert minutes in secs
export const getTimeInSecs = (minutes: number) : number => {
  return 60 * minutes;
}

// Calculate time value
export const calculateTimeValue = (secs: number) : string => { 
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes} : ${returnedSeconds}`;
}

