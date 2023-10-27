import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [slider, setSlider] = useState(true);
  const [sliderImg, setSliderImg] = useState({ 1: "", 2: "", 3: "" });
  const [boxColor, setBoxColor] = useState({ 1: "", 2: "", 3: "" });
  const [courseOrder, setCourseOrder] = useState({ 1: 1, 2: 2, 3: 3 });
  const [footerText, setFooterText] = useState({ 1: "", 2: "" });

  return (
    <AppContext.Provider
      value={{
        logged,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
