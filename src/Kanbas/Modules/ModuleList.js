import React, {useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Kanbas/Database";
import {BsGripVertical} from "react-icons/bs"
import './index.css'
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  /*const [modules, setModules] = useState(db.modules);*/
  /*const modules = db.modules.filter(
    (module) => module.course === courseId);*/
  /*const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const addModule = (module) => {
    setModules([
      { ...module, _id: new Date().getTime().toString() },
      ...modules,
    ]);
  };

  const deleteModule = (moduleId) => {
    setModules(modules.filter(
      (module) => module._id !== moduleId));
  };

  const updateModule = () => {
    setModules(
      modules.map((m) => {
        if (m._id === module._id) {
          return module;
        } else {
          return m;
        }
      })
    );
  }
*/


   
  return (
        <ul className="list-group page-margin-right ">
          <li className="list-group-item">
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        <button onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
        <input value={module.name}
          onChange={(e) =>  dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>

        {
        modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
            <li key={index} className="list-group-item list-group-item-secondary module-styling">
              <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
              <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

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