import { Link } from "react-router-dom";
import db from "../Database";
import './index.css'
function Dashboard() {
    const courses = db.courses;
  return (
    <div class="page-margin-left page-margin-right">
      <h1>Dashboard</h1>
      <hr/>
      <h2>Published ({courses.length})</h2>
      
      <div className="card-container">
        {db.courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card h-100 card-style">
            <img src="../../images/starship.jpg" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" id="course-name">{course.name}</h5>
              <p className="card-text wd-grey wd-font-small">Course Number: {course.number}</p>
              <p className="card-text wd-grey wd-font-small">Start Date: {course.startDate}</p>
              <p className="card-text wd-grey wd-font-small">End Date: {course.endDate}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;