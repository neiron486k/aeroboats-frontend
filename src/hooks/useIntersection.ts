import { MutableRefObject, useEffect, useState } from 'react';

const useIntersection = (ref: MutableRefObject<HTMLDivElement | null>) => {
  const [intersect, setIntersect] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIntersect(true);
          } else {
            setIntersect(false);
          }
        });
      },
      { threshold: 0.7 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  });

  return intersect;
};

export default useIntersection;
