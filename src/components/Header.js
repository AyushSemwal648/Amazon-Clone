import React, { useEffect, useState } from "react";
import header1 from "../assets/header1.jpg";
import header2 from "../assets/header2.jpg";
import header3 from "../assets/header3.jpg";
import header4 from "../assets/header4.jpg";
import header5 from "../assets/header5.jpg";
import header6 from "../assets/header6.jpg";
import rightarrow from "../assets/right-arrow.png";
import leftarrow from "../assets/left-arrow.png";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const imgs = document.querySelectorAll(".header-slider ul img");
    const prev_btn = document.querySelector(".control_previous");
    const next_btn = document.querySelector(".control_next");

    const totalSlides = imgs.length;

    const changeSlide = () => {
      imgs.forEach((img, index) => {
        img.style.display = index === currentSlide ? "block" : "none";
      });
    };

    changeSlide();

    const handlePrevClick = (e) => {
      e.preventDefault();
      setCurrentSlide((prevSlide) =>
        prevSlide > 0 ? prevSlide - 1 : totalSlides - 1
      );
    };

    const handleNextClick = (e) => {
      e.preventDefault();
      setCurrentSlide((prevSlide) =>
        prevSlide < totalSlides - 1 ? prevSlide + 1 : 0
      );
    };

    prev_btn.addEventListener("click", handlePrevClick);
    next_btn.addEventListener("click", handleNextClick);

    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide < totalSlides - 1 ? prevSlide + 1 : 0
      );
    }, 5000); 

    return () => {
      prev_btn.removeEventListener("click", handlePrevClick);
      next_btn.removeEventListener("click", handleNextClick);
      clearInterval(intervalId);
    };
  }, [currentSlide]);

  return (
    <div className="header-slider relative">
      <a
        href="#"
        className="control_previous absolute top-16 z-10 p-[2vh]  text-[#0000007b] text-lg cursor-pointer"
      >
        <img src={leftarrow} className="h-10 w-10" alt="Previous" />
      </a>
      <a
        href="#"
        className="control_next absolute top-16 right-0 z-10 p-[2vh]  text-[#0000007b] font-semibold text-lg cursor-pointer"
      >
        <img src={rightarrow} className="h-10 w-10" alt="Next" />
      </a>
      <ul className="flex overflow-y-hidden">
        <img
          src={header1}
          className={`header-img ${
            currentSlide === 0 ? "block" : "hidden"
          } max-w-full mask-gradient`}
          alt="header1"
        />
        <img
          src={header2}
          className={`header-img ${
            currentSlide === 1 ? "block" : "hidden"
          } max-w-full mask-gradient`}
          alt="header2"
        />
        <img
          src={header3}
          className={`header-img ${
            currentSlide === 2 ? "block" : "hidden"
          } max-w-full mask-gradient`}
          alt="header3"
        />
        <img
          src={header4}
          className={`header-img ${
            currentSlide === 3 ? "block" : "hidden"
          } max-w-full mask-gradient`}
          alt="header4"
        />
        <img
          src={header5}
          className={`header-img ${
            currentSlide === 4 ? "block" : "hidden"
          } max-w-full mask-gradient`}
          alt="header5"
        />
        <img
          src={header6}
          className={`header-img ${
            currentSlide === 5 ? "block" : "hidden"
          } max-w-full mask-gradient`}
          alt="header6"
        />
      </ul>
    </div>
  );
};

export default Header;
