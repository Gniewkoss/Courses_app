import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import "./Courses.scss";

const Courses = () => {
  const { courseOrder } = useContext(AppContext);

  const courses = [
    {
      title: "Kurs HTML",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero, eaque.",
    },
    {
      title: "Kurs CSS",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero, eaque.",
    },
    {
      title: "Kurs JavaScript",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero, eaque.",
    },
  ];

  const getCoursesInOrder = () => {
    const orderedCourses = [];

    for (let i = 1; i <= 3; i++) {
      const index = courseOrder[i] - 1;
      const course = courses[index];

      orderedCourses.push(
        <div className="course" key={i}>
          <h2>{course.title}</h2>
          <p>{course.content}</p>
        </div>
      );
    }

    return orderedCourses;
  };

  return (
    <div id="courses" className="container">
      <div className="courses">{getCoursesInOrder()}</div>
    </div>
  );
};

export default Courses;
