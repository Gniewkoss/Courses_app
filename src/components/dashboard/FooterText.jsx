import React from "react";

const FooterText = ({ footerText, setFooterText, setFooterTextHandler }) => {
  return (
    <div className="footer-text section-settings mb-4">
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
  );
};

export default FooterText;
