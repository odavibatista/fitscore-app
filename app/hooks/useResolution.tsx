import { useEffect, useState } from "react";

export const useResolution = (): { width: number; height: number } => {
  const [resolution, setResolution] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return resolution;
};