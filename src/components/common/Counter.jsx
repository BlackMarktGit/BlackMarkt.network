import React, { useEffect, useState } from 'react';

export default function Counter({
  target,
  duration = 1.2,
  format = (v) => Math.round(v),
  delay = 0,
  trigger = true,
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp = null;
    let rafId;

    const timeout = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = (timestamp - startTimestamp) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        setVal(target * ease);

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setVal(target);
        }
      };
      rafId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [target, duration, delay, trigger]);

  return <>{format(val)}</>;
}
