import React, { useEffect, useState, useMemo } from "react";
import "./Slider.css";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

// Function to dynamically import images from a directory
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../ImgSrc/SliderImg", false, /\.(jpg|jpeg|png)$/)
);

const Slider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextActive = (active + 1) % images.length;
      
      // If nextActive is not 0, set it and reload
      if (nextActive !== 0) {
        setActive(nextActive);
        reloadSlider(nextActive);
      } else {
        // If nextActive is 0, it means we reached the last image
        // Reset the interval to match the user-initiated timing
        clearInterval(interval);
        setTimeout(() => {
          setActive(nextActive);
          reloadSlider(nextActive);
          // Start the interval again
          setInterval(() => {
            const newNextActive = (active + 1) % images.length;
            setActive(newNextActive);
            reloadSlider(newNextActive);
          }, 5000);
        }, 5000);
      }
    }, 5000);
  
    return () => {
      clearInterval(interval);
    };
  }, [images, active]);

  const nextClick = () => {
    const nextActive = (active + 1) % images.length;

    if (nextActive !== 0) {
      setActive(nextActive);
    }

    reloadSlider(nextActive);
  };

  const prevClick = () => {
    const prevActive = (active - 1 + images.length) % images.length;

    setActive(prevActive);
    reloadSlider(prevActive);
  };

  const handleDotClick = (index) => {
    setActive(index);
    reloadSlider(index);
  };

  const reloadSlider = (activeIndex = active) => {
    const list = document.querySelector("#slider-container .list");
    const items = document.querySelectorAll("#slider-container .list .item");
  
    // Guard clause to exit early if items or items[activeIndex] is undefined
    if (!items || !items[activeIndex]) {
      return;
    }
  
    let checkLeft = items[activeIndex].offsetLeft;
    list.style.left = -checkLeft + "px";
  };
  
  

  useEffect(() => {
    reloadSlider();
  }, [active]);

  return (
    <div id="slider-container">
      <div className="list">
        {images.map((src, index) => (
          <div className="item" key={index}>
            <img src={src} alt={`image-${index}`} />
          </div>
        ))}
      </div>

      <div className="buttons-act">
        <button id="prev" onClick={prevClick}>
          <BiArrowFromRight />
        </button>
        <button id="next" onClick={nextClick}>
          <BiArrowFromLeft />
        </button>
      </div>

      <ul className="dots">
        {images.map((_, index) => (
          <li
            key={index}
            className={index === active ? "li-active" : ""}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
