import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import Modules from "../Modules";
import Home from "../Home";
import {RxHamburgerMenu} from "react-icons/rx"
import './index.css'

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div class="page-margin-left page-margin-right icon-padding-top">
      
      {/* <p class="font-large wd-red"><span class="hamburger-icon"><RxHamburgerMenu/></span>      
       {course.name}</p> */}

       <nav class="custom-breadcrumb" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <span class="font-large wd-red"><span class="hamburger-icon"><RxHamburgerMenu/></span>
          <li class="breadcrumb-item active"><a class="link-style" href="#">{course.name}</a></li>  
          <li class="breadcrumb-item active" aria-current="page">Home</li>
          {/* if route == "home" show home etc.. how to do this??? */}
          </span>
        </ol>
      </nav>

      <hr/>
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
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
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