"use client";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function useVisibilityProgress(options = {}) {
  const [enabled, setEnabled] = useState(true);
  const { ref, entry } = useInView({
    ...options,
    threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    triggerOnce: false, // We'll manually disable
    skip: !enabled,     // <-- disable observation once full visibility reached
  });

  const [visibility, setVisibility] = useState(1);
  const [hasBeenFullyVisible, setHasBeenFullyVisible] = useState(false);

  useEffect(() => {
    if (!entry || !enabled) return;

    const raw = entry.intersectionRatio;

    if (raw >= 1) {
      setHasBeenFullyVisible(true);
      setEnabled(false);
      setVisibility(1); 
      return;
    }

    const clamped = raw < 0.5 ? 0 : (raw - 0.5) / 0.5;
    const normalized = Math.min(1, Math.max(0, clamped));
    setVisibility(normalized);
  }, [entry, enabled]);

  return { ref, visibility, hasBeenFullyVisible };
}
