import { useEffect, useState } from "react"

const getScreenWidth = () => window.innerWidth;

export const useScreenWidth = () => {
  const [width, setWidth] = useState(getScreenWidth());

  // tailwind md
  const desktopWidth = 768;

  const handleWidthChange = () => setWidth(width => getScreenWidth());

  useEffect(() => {
    window.addEventListener("resize", handleWidthChange);
    return () => window.removeEventListener("resize", handleWidthChange);
  }, []);

  return (width <= desktopWidth ? "mobile" : "desktop");
}