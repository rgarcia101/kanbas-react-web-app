import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Kanbas/Database";
import {BsGripVertical} from "react-icons/bs"
import './index.css'

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter(
    (module) => module.course === courseId);
  return (
        <ul className="list-group page-margin-right ">
        {
        modules.map((module, index) => (
            <li key={index} className="list-group-item list-group-item-secondary module-styling">
              <div className="vertical-align">
              <p><BsGripVertical/><span className="font-bold">{module.name}</span> - {module.description}</p>
              </div>
           
            </li>
        ))
        }
        </ul>
  );
}
export default ModuleList;