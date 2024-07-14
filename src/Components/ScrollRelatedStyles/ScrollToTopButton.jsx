import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isVisible);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "visible" : "invisible"
      } fixed bottom-4 right-4 bg-black text-white p-1 rounded-full cursor-pointer transition-opacity duration-300  z-40`}
    >
      <MdKeyboardDoubleArrowDown className="text-3xl hover:rotate-180 hover:transition-transform hover:duration-1000" />
    </button>
  );
};

export default ScrollToTopButton;
