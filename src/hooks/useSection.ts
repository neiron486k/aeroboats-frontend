import { MutableRefObject, useEffect, useState } from 'react';

const useSection = (ref: MutableRefObject<HTMLDivElement | null>) => {
  const [intersect, setIntersect] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIntersect(true);
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

export default useSection;
