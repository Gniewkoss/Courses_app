import React from "react";

const SliderSettings = ({
  slider,
  setSlider,
  handleLogout,
  setSliderImgHandler,
  sliderImg,
}) => {
  return (
    <div className="section-settings bg-white p-4 shadow-lg rounded">
      <div className="title mb-4">
        <h2 className="text-xl font-bold mb-2">Slider</h2>
        <button
          className={`bg-${
            slider ? "red" : "green"
          }-500 text-white px-3 py-1 rounded`}
          onClick={() => setSlider(!slider)}
        >
          {slider ? "OFF" : "ON"}
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="sliders-img mb-4">
        <h2 className="text-xl font-bold mb-2">Sliders IMGs</h2>
        <div className="inputs">
          <p>1</p>
          <input
            onChange={setSliderImgHandler}
            value={sliderImg[1]}
            type="text"
            name="1"
            placeholder="paste here URL to img"
            className="border border-gray-300 p-1 mb-2 rounded"
          />
          <p>2</p>
          <input
            onChange={setSliderImgHandler}
            value={sliderImg[2]}
            type="text"
            name="2"
            placeholder="paste here URL to img"
            className="border border-gray-300 p-1 mb-2 rounded"
          />
          <p>3</p>
          <input
            onChange={setSliderImgHandler}
            value={sliderImg[3]}
            type="text"
            name="3"
            placeholder="paste here URL to img"
            className="border border-gray-300 p-1 mb-2 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderSettings;
