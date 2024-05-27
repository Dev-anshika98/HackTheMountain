import  { useState, useEffect } from 'react';
import  "../index.css"


const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState(new Date());

  useEffect(() => {
    const currentDate = new Date();
    const calculatedTargetDate = new Date(currentDate.setDate(currentDate.getDate() + 30));
    setTargetDate(calculatedTargetDate);
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold mb-4 text-white">Countdown to Hack The Mountains</h1>
      <div className="flex justify-center space-x-4 mt-4">
        {Object.keys(timeLeft).map((interval) => (
          <div
            key={interval}
            className="text-2xl bg-[#4cb7e9] rounded-lg p-4 transition-transform transform hover:scale-105 hover:bg-gray-500"
          >
            {timeLeft[interval] || '0'}
            <span className="block text-sm">{interval.charAt(0).toUpperCase() + interval.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
