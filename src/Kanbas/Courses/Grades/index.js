import db from "../../Database";
import { useParams } from "react-router-dom";
import {BsFillGearFill} from "react-icons/bs";
import {FaFileImport, FaFileExport, FaFilter} from "react-icons/fa6"
import './index.css';
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="page-margin">
        <button type="button" class="btn btn-secondary button-margin float-end  black-color"><BsFillGearFill/></button>
                
                <div class="dropdown float-end button-margin">
                    <button class="btn btn-secondary dropdown-toggle black-color" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="black-color icon-padding"><FaFileExport/></span><span class="black-color">Export</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                <button type="button" class="btn btn-secondary button-margin float-end"><span className="black-color icon-padding"><FaFileImport/></span><span class="black-color">Import</span></button><br/><br/>
                
                <div class="container no-padding">
                    <div class="row text-padding-top">
                        <div class="col-md-6">
                            <label for="studentNamesInput" class="form-label bold-text">Student Names</label>
                        </div>
                        <div class="col-md-6 no-padding-left">
                            <label for="assignmentNamesInput" class="form-label bold-text">Assignment Names</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <select class="form-select" id="studentNamesInput">
                                <option selected>Search Students</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col no-padding-right">
                            <select class="form-select" id="assignmentNamesInput">
                                <option selected>Search Assignments</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>  
                </div>  
                
            <button type="button" class="btn btn-secondary button-margin-top-bottom"><span className="black-color icon-padding-right"><FaFilter/></span><span class="black-color">Apply Filter</span></button>

      <h1 className="page-margin-top">Grades</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td><span className="red-color">{user.firstName} {user.lastName}</span></td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;