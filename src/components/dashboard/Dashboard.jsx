import "./Dashboard.scss";
import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const {
    setLogged,
    slider,
    setSlider,
    sliderImg,
    setSliderImg,
    boxColor,
    setBoxColor,
    courseOrder,
    setCourseOrder,
    footerText,
    setFooterText,
  } = useContext(AppContext);

  const setSliderImgHandler = (e) => {
    const sliderNumber = Number(e.target.name);
    const sliderImgValue = e.target.value;

    setSliderImg((prevState) => ({
      ...prevState,
      [sliderNumber]: sliderImgValue,
    }));
  };

  const setBoxColorHandler = (e) => {
    const boxNumber = Number(e.target.name);
    const boxColorValue = e.target.value;

    setBoxColor((prevState) => ({
      ...prevState,
      [boxNumber]: boxColorValue,
    }));
  };

  const setCourseOrderHandler = (e) => {
    const courseNumber = Number(e.target.name);
    const courseNumberValue = Number(e.target.value);

    setCourseOrder((prevState) => ({
      ...prevState,
      [courseNumber]: courseNumberValue,
    }));
  };

  const setFooterTextHandler = (e) => {
    const footerNumber = Number(e.target.name);
    const footerNumberValue = e.target.value;

    setFooterText((prevState) => ({
      ...prevState,
      [footerNumber]: footerNumberValue,
    }));
  };

  const handleLogout = () => {
    setLogged(false);
  };

  return (
    <div className="dashboard-container m-5">
      <h2 className="main">Admin panel</h2>
      <div className="show-home-btn m-5 ">
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
          Show Home Page
        </Link>
      </div>
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
        <div className="box-colors mb-4">
          <h2 className="text-xl font-bold mb-2">Box colors</h2>
          <div className="color-input">
            <p>1</p>
            <input
              onChange={setBoxColorHandler}
              value={boxColor[1]}
              type="color"
              name="1"
              className="p-1 mb-2 rounded"
            />
            <p>2</p>
            <input
              onChange={setBoxColorHandler}
              value={boxColor[2]}
              type="color"
              name="2"
              className="p-1 mb-2 rounded"
            />
            <p>3</p>
            <input
              onChange={setBoxColorHandler}
              value={boxColor[3]}
              type="color"
              name="3"
              className="p-1 mb-2 rounded"
            />
          </div>
        </div>
        <div className="courses-order mb-4">
          <h2 className="text-xl font-bold mb-2">Courses Order</h2>
          <div className="courses-inputs">
            <p>1</p>
            <input
              onChange={setCourseOrderHandler}
              value={courseOrder[1]}
              type="number"
              min={1}
              max={3}
              name="1"
              className="border border-gray-300 p-1 mb-2 rounded"
            />
            <p>2</p>
            <input
              onChange={setCourseOrderHandler}
              value={courseOrder[2]}
              type="number"
              min={1}
              max={3}
              name="2"
              className="border border-gray-300 p-1 mb-2 rounded"
            />
            <p>3</p>
            <input
              onChange={setCourseOrderHandler}
              value={courseOrder[3]}
              type="number"
              min={1}
              max={3}
              name="3"
              className="border border-gray-300 p-1 mb-2 rounded"
            />
          </div>
        </div>
        <div className="footer-text mb-4">
          <h2 className="text-xl font-bold mb-2">Footer text</h2>
          <div className="footer-inputs">
            <p>1</p>
            <input
              onChange={setFooterTextHandler}
              value={footerText[1]}
              type="text"
              name="1"
              className="border border-gray-300 p-1 mb-2 rounded"
            />
            <p>2</p>
            <input
              onChange={setFooterTextHandler}
              value={footerText[2]}
              type="text"
              name="2"
              className="border border-gray-300 p-1 mb-2 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
