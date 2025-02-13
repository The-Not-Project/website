"use client";
import { useState, useEffect } from 'react';

export default function useHeaderScroll() {
  const [transparency, setTransparency] = useState(true);
  const [backgroundPosition, setBackgroundPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Update continuously: transparency is true if scrollY is low, false otherwise.
      setTransparency(scrollY <= 50);
      // For example, a simple parallax effect:
      setBackgroundPosition(scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { transparency, backgroundPosition };
}
