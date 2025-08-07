import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const animateBlock = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.3 },
  };

  return (
    <div className="flex justify-center gap-4 text-sm font-medium">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <motion.div
          key={unit}
          className="bg-white shadow-md px-4 py-2 rounded-md"
          {...animateBlock}
        >
          <div className="text-xl font-bold text-green-700">
            {timeLeft[unit] ?? "00"}
          </div>
          <div className="text-gray-500 uppercase">{unit}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;