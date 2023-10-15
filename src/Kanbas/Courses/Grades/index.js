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
        <button type="button" className="btn btn-secondary button-margin float-end  black-color"><BsFillGearFill/></button>
                
                <div className="dropdown float-end button-margin">
                    <button className="btn btn-secondary dropdown-toggle black-color" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="black-color icon-padding"><FaFileExport/></span><span className="black-color">Export</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                <button type="button" className="btn btn-secondary button-margin float-end"><span className="black-color icon-padding"><FaFileImport/></span><span className="black-color">Import</span></button><br/><br/>
                
                <div className="container no-padding">
                    <div className="row text-padding-top">
                        <div className="col-md-6">
                            <label for="studentNamesInput" className="form-label bold-text">Student Names</label>
                        </div>
                        <div className="col-md-6 no-padding-left">
                            <label for="assignmentNamesInput" className="form-label bold-text">Assignment Names</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <select className="form-select" id="studentNamesInput">
                                <option selected>Search Students</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col no-padding-right">
                            <select className="form-select" id="assignmentNamesInput">
                                <option selected>Search Assignments</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>  
                </div>  
                
            <button type="button" className="btn btn-secondary button-margin-top-bottom"><span className="black-color icon-padding-right"><FaFilter/></span><span className="black-color">Apply Filter</span></button>

      <h1 className="page-margin-top">Grades</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (<th>{assignment.title}</th>))}
            </tr>
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