import React, { useState, useEffect } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-10 text-green-800 fixed mt-64 hover:text-green-500">
      {" "}
      {showTopBtn && (
        <ArrowUpCircleIcon
          className="mt-64 bg-green-100 rounded-full"
          onClick={goToTop}
        />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
