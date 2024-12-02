import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  number: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  number,
  duration = 2000,
  className = 'counter',
}) => {
  const [displayNumber, setDisplayNumber] = useState<number>(number);
  const previousNumberRef = useRef<number>(number);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const startNumber = previousNumberRef.current;
    const endNumber = number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const currentNumber = Math.floor(startNumber + (endNumber - startNumber) * progress);
      setDisplayNumber(currentNumber);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        previousNumberRef.current = endNumber;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [number, duration]);

  return <p className={className}>{displayNumber}</p>;
};

export default AnimatedCounter;
