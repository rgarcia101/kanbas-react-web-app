import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import {AiFillCheckCircle} from "react-icons/ai";
import {BsThreeDotsVertical} from "react-icons/bs";
import './index.css';


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="page-margin padding-top-table">
      <button type="button" className="btn btn-secondary float-end"><span className="black-color"><BsThreeDotsVertical/></span></button>
      <button type="button" className="btn btn-outline-success non-clickable float-end button-margin">
          <span className="icon-padding-right"><AiFillCheckCircle/></span>
          <span>Published</span>
      </button>
      <br/><br/>
      <hr></hr>

      <label for="assignmentFormControlInput" className="form-label">Assignment Name</label>
      <input value={assignment.title}
             className="form-control mb-2" id="assignmentFormControlInput"/>
      <hr></hr>
      <span className="float-end">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger button-margin">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success me-2">
          Save
        </button>
      </span>
    </div>
  );
}


export default AssignmentEditor;