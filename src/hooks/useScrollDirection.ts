import { useEffect, useState } from 'react';

interface UseScrollDirectionResult {
  isUp: boolean;
  isDown: boolean;
}

export const useScrollDirection = (threshold?: number): UseScrollDirectionResult => {
  const [isUp, setUp] = useState(false);
  const [isDown, setDown] = useState(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        setUp(true);
      } else {
        setDown(true);
      }

      setTimeout(() => {
        setUp(false);
        setDown(false);
      }, threshold || 500);
    };

    document.addEventListener('wheel', handleWheel);

    return () => document.removeEventListener('wheel', handleWheel);
  }, [threshold]);

  return { isUp, isDown };
};
