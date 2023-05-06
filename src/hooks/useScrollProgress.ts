import { useCallback, useEffect, useState } from "react";

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  const handleOnScroll = (e: Event) => {
    const currentScroll = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    if (scrollHeight) {
      const percent = Math.round(Number((currentScroll / scrollHeight).toFixed(2)) * 100);
      setProgress(percent);
    }
  };

  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return progress;
};
