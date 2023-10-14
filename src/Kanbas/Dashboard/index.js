import { Link } from "react-router-dom";
import db from "../Database";
import './index.css'
function Dashboard() {
    const courses = db.courses;
  return (
    <div className="page-margin-left page-margin-right">
      <h1>Dashboard</h1>
      <hr/>
      <h2>Published ({courses.length})</h2>
      
      <div className="card-container">
        {db.courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card h-100 card-style">
            <img src="../../images/starship.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" id="course-name">{course.name}</h5>
              <p className="card-text wd-grey">Course Number: {course.number} <br/><span className="wd-font-small">Start Date: {course.startDate} End Date: {course.endDate}</span></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;