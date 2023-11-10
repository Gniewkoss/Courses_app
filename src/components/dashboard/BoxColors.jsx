import React from "react";

const BoxColors = ({ boxColor, setBoxColor, setBoxColorHandler }) => {
  return (
    <div className="box-colors section-settings">
      <h2 className="box-colors">Box colors</h2>
      <div className="color-input ">
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
  );
};

export default BoxColors;
