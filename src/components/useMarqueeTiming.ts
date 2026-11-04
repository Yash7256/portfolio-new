import { useLayoutEffect, useRef, useState } from "react";

const MARQUEE_PIXELS_PER_SECOND = 70;

export function useMarqueeTiming() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(18);

  useLayoutEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const updateDuration = () => {
      const loopWidth = marquee.scrollWidth / 2;
      if (loopWidth > 0) {
        setDuration(loopWidth / MARQUEE_PIXELS_PER_SECOND);
      }
    };

    updateDuration();
    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(updateDuration) : null;
    resizeObserver?.observe(marquee);
    window.addEventListener("resize", updateDuration);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateDuration);
    };
  }, []);

  return { marqueeRef, duration };
}
