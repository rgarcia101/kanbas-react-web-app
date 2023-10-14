import React from "react";
import { Link, useParams } from "react-router-dom";
import {BsThreeDotsVertical, BsGripVertical} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import {GiNotebook} from "react-icons/gi";
import{IoMdCheckmarkCircle} from "react-icons/io";
import './index.css';


import db from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="page-margin padding-top-table">
      <button type="button" className="btn btn-secondary float-end"><span className="black-color"><BsThreeDotsVertical/></span></button>
      <button type="button" className="btn btn-danger button-margin float-end"><span className="icon-padding-right"><AiOutlinePlus/></span> Assignment</button>
      <button type="button" className="btn btn-secondary button-margin float-end"><span className="black-color"><AiOutlinePlus/> Group</span></button>
      <input type="text" className="form-control w-25" id="seachFormControlInput" placeholder="Search for Assignment"></input>

      <hr></hr>
      
     
      <div className="list-group no-border-radius">
        <li className="list-group-item list-group-item-secondary padding-bottom-table padding-top-table"><BsGripVertical/> <span className="bold-text">ASSIGNMENTS</span><span className="float-end icon-padding"><BsThreeDotsVertical/></span><span className="float-end icon-padding"><AiOutlinePlus/></span><span className="badge rounded-pill bg-secondary float-end"><span className="black-color">40% of Total</span></span></li>
        <div className="green-left-border">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            <span className="icon-padding-right-larger float-start padding-top-icon"><BsGripVertical/></span><span className="green-color icon-padding-right-larger float-start padding-top-icon"><GiNotebook/></span><span className="bold-text">{assignment.title}</span><span className="float-end padding-top-icon"><span className="icon-padding-right-larger green-color"><IoMdCheckmarkCircle/></span><BsThreeDotsVertical/></span><br/><span className="small-font"><span className="red-color">Multiple Modules</span> | <span className="bold-text">Due: </span> {assignment.due} | 100 pts</span>
          </Link>
        ))}</div>
      </div>
    </div>
  );
}
export default Assignments;