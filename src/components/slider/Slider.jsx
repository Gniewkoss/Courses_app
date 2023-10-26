import "./Slider.scss";
import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  const { sliderImg } = useContext(AppContext);

  return (
    <div className="slider-container container">
      <Carousel>
        {[1, 2, 3].map((num) => (
          <div key={num} className={`slide slide-${num}`}>
            <img src={sliderImg[num]} />
            <p className="legend">Slide {num}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
