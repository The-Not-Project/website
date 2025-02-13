"use client";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function useRadarVisibility(options = {}) {
  const { ref, inView } = useInView(options);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenVisible(true);
    }
  }, [inView]);

  return { ref, isVisible: hasBeenVisible };
}
