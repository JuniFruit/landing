import { useState, useRef, useEffect } from "react";

interface IUseIntersect {
  options?: IntersectionObserverInit;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
  isOnce?: boolean;
}

export const useIntersect = ({ onIntersect, options, isOnce = false }: IUseIntersect) => {
  const [isIntersecting, setIsInersecting] = useState(false);

  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (!ref.current) return;
      entries.forEach(entry => {
        setIsInersecting(entry.isIntersecting);
        if (entry.isIntersecting && !!onIntersect) onIntersect(entry);
        if (entry.isIntersecting && isOnce) observer?.unobserve(ref.current);
      });
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref.current, options]);

  return {
    ref,
    isIntersecting,
  };
};
