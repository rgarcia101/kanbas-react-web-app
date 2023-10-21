import { Link} from "react-router-dom";
import { React, useState } from "react";
import db from "../Database";
import './index.css'
function Dashboard(  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {

  return (
    <div className="page-margin-left page-margin-right button-margin-bottom">
      <h1>Dashboard</h1>
      <hr/>
      <h2>Published ({courses.length})</h2>
      <hr/>
      <h5>Course</h5>
      <input value={course.name} className="form-control w-25 button-margin-top-bottom" onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
      <input value={course.number} className="form-control w-25 button-margin-top-bottom" onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control w-25 button-margin-top-bottom" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
      <input value={course.endDate} className="form-control w-25 button-margin-top" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>
      <button className="button-margin button-margin-top button-margin-bottom btn btn-success" onClick={addNewCourse} >
        Add
      </button>
      <button className="button-margin-top button-margin-bottom btn btn-primary" onClick={updateCourse} >
        Update
      </button>

      <div className="card-container">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card h-100 card-style">
            <img src="../../images/starship.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
            <button className="button-margin btn btn-primary button-margin-bottom"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

              <button className="btn btn-danger button-margin-bottom"
                onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
              </button>

              <span className="link-style">
              <h5 className="card-title" id="course-name">{course.name}</h5>
              <p className="card-text wd-grey">Course Number: {course.number} <br/><span className="wd-font-small">Start Date: {course.startDate} End Date: {course.endDate}</span></p>
            </span></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;