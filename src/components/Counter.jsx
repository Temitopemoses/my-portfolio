import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let start = 0;
    const end = 100; // The final count
    const duration = 2000; // Duration of the animation in milliseconds
    const incrementTime = (duration / end) * 2; // Time between each increment

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
        setTimeout(() => setVisible(false), 500); // Hide the counter after a short delay
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="counter">
      <h1>{count}%</h1>
    </div>
  );
};

export default Counter;