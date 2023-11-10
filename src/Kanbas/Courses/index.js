//import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import Modules from "../Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {RxHamburgerMenu} from "react-icons/rx"
import './index.css'
import { useState, useEffect } from "react";
import axios from "axios";


function Courses({ courses }) {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  //const course = courses.find(c => String(c._id) === String(courseId));
  const { pathname } = useLocation();
  

  const getBreadcrumbLabel = (pathname) => {
    if (pathname.includes("/Home")) {
      return "Home";
    }
      else if (pathname.includes("/Modules")) {
      return "Modules";
    } else if (pathname.includes("/Piazza")) {
      return "Piazza";
    }
    else if (pathname.includes("/Zoom")) {
      return "Zoom Meetings"
    }
    else if (pathname.includes("/Assignments")){
      return "Assignments"
    }
    else if (pathname.includes("/Quizzes")){
      return "Quizzes"
    }
    else if (pathname.includes("/Grades")){
      return "Grades"
    }
    else if (pathname.includes("/People")){
      return "People"
    }
    else if (pathname.includes("/Panopto")){
      return "Panopto Video"
    }
    else if (pathname.includes("/Discussions")){
      return "Discussions"
    }
    else if (pathname.includes("/Announcements")){
      return "Announcements"
    }
    else if (pathname.includes("/Pages")){
      return "Pages"
    }
    else if (pathname.includes("/Files")){
      return "Files"
    }
    else if (pathname.includes("/Rubrics")){
      return "Rubrics"
    }
    else if (pathname.includes("/Outcomes")){
      return "Outcomes"
    }
    else if (pathname.includes("/Collaborations")){
      return "Collaborations"
    }
    else if (pathname.includes("/Syllabus")){
      return "Syllabus"
    }
    else if (pathname.includes("/Settings")){
      return "Settings"
    }

    // Add more cases for other partial route matches as needed
    return "";
  };

  const currentBreadcrumbLabel = getBreadcrumbLabel(pathname);
  return (
    <div>
      <span className="font-large wd-red page-margin-left"><span className="hamburger-icon"><RxHamburgerMenu/></span></span><span><Link to={pathname} className="link-style">{course.name}</Link> {">"} {currentBreadcrumbLabel}</span>
      <hr></hr>
    
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}/>
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />

            
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;