import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import "./Footer.scss";

const Footer = () => {
  const { footerText } = useContext(AppContext);

  return (
    <div className="footer-container container">
      <h2>
        Made by <span>#TechniSchools</span>
      </h2>
      {Object.keys(footerText).map((key) => (
        <h2 key={key}>{footerText[key]}</h2>
      ))}
    </div>
  );
};

export default Footer;
