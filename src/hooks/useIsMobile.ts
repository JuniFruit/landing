import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isLaptopSmall, setIsLaptopSmall] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsLaptopSmall(window.innerWidth < 1024);
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
      setIsLaptopSmall(window.innerWidth < 1024);
    };
    window.addEventListener("resize", updateSize);

    return (): void => window.removeEventListener("resize", updateSize);
  }, [isMobile]);

  return { isMobile, isLaptopSmall };
};
