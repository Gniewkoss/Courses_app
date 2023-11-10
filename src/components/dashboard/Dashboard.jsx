import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import { AppContext } from "../../context/app.context";
import SliderSettings from "./SliderSettings";
import BoxColors from "./BoxColors";
import CoursesOrder from "./CoursesOrder";
import FooterText from "./FooterText";

const Dashboard = () => {
  const {
    setLogged,
    slider,
    setSlider,
    setSliderImg,
    boxColor,
    setBoxColor,
    courseOrder,
    setCourseOrder,
    footerText,
    setFooterText,
  } = useContext(AppContext);

  const handleLogout = () => {
    setLogged(false);
  };

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

  return (
    <div className="dashboard-container">
      <h2 className="main">Admin panel</h2>
      <Link to="/" className="show-home-btn">
        Show Home Page
      </Link>

      <SliderSettings
        slider={slider}
        setSlider={setSlider}
        handleLogout={handleLogout}
        setSliderImgHandler={setSliderImgHandler}
        sliderImg={setSliderImg}
      />

      <BoxColors
        boxColor={boxColor}
        setBoxColor={setBoxColor}
        setBoxColorHandler={setBoxColorHandler}
      />
      <CoursesOrder
        courseOrder={courseOrder}
        setCourseOrder={setCourseOrder}
        setCourseOrderHandler={setCourseOrderHandler}
      />
      <FooterText
        footerText={footerText}
        setFooterText={setFooterText}
        setFooterTextHandler={setFooterTextHandler}
      />
    </div>
  );
};

export default Dashboard;
