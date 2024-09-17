import { useEffect, useState } from 'react'

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBoom, setBoom] = useState(false); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBoom(true);
    }, 10000); // 10000 millisecondes = 10 secondes

    return () => clearTimeout(timeoutId);
  }, [])

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <h1>{formatTime(currentTime)}</h1>
      {isBoom && <h2>BOOM !!!</h2>}
    </>
  );
};

export default Time;