// import {Link} from "react-router-dom";
// import Nav from "../Nav";
// function Kanbas() {
//     return(
//        <div>
//          <Nav/>
//           <h1>Kanbas</h1>
//        </div>
//     );
//  }
//  export default Kanbas
import store from "./store";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
//import db from "./Database";
import { useState, useEffect } from "react";
import axios from "axios";
import { stringify } from 'flatted';
function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
      name: "New Course",      number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
    });
  // const addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    console.log(response);
    console.log(response.data);
    console.log(response.data);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };


  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${courseId}`
    );
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };




  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  // const updateCourse = async (courseId) => {
  //   const response = await axios.put(
  //     `${URL}/${courseId}`,
  //     course
  //   );
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === courseId) {
  //         return response.data;
  //       }
  //       return c;
  //     })
  //   );
  //   setCourse({ name: "" });
  // };

  const updateCourse = async (course) => {
    const response = await axios.put(
          `${URL}/${course._id}`,
          course
        );
    console.log(response.data);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    console.log(courses);
    setCourse({ name: "" });
  };




   return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          
          <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={ 
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
            } />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
          <Route path="History" element={<h1>History</h1>} />
          <Route path="Studio" element={<h1>Studio</h1>} />
          <Route path="Commons" element={<h1>Commons</h1>} />
          <Route path="Help" element={<h1>Help</h1>} />
          </Routes>

        </div>
      </div>
      </Provider>
    );
  
 }
 export default Kanbas;