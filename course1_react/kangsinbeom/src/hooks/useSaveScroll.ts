import { useEffect } from "react";

const useSaveScroll = () => {
  useEffect(() => {
    let timer: number | NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        const currentY = window.scrollY;
        sessionStorage.setItem("scrollY", JSON.stringify(currentY));
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, []);
  return;
};

export default useSaveScroll;
