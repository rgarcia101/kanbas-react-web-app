import { Link, useParams, useLocation } from "react-router-dom";
import './index.css'

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  console.log("PATHNAME: ", pathname, typeof(pathname))
  return (
    <div className="list-group" id = "id-account-nav">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"} wd-account-nav-links`}
          style={pathname.includes(link) || pathname.includes("Zoom") && link === "Zoom Meetings" || pathname.includes("Panopto") && link === "Panopto Video" ? {
            marginLeft: "20px",
            color: "black",
            borderLeft: "5px solid black",
          } : {}}          
          >
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;