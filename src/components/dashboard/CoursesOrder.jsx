import React from "react";

const CoursesOrder = ({
  courseOrder,
  setCourseOrder,
  setCourseOrderHandler,
}) => {
  return (
    <div className="courses-order section-settings mb-4">
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
  );
};

export default CoursesOrder;
