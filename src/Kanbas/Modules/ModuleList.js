import React, {useEffect, useState} from "react";
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
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";
function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };



  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();   
  return (
        <ul className="list-group page-margin-right ">
          <li className="list-group-item">
        <button className="btn btn-success float-end" onClick={handleAddModule}>Add</button>
        <button className="btn btn-primary button-margin float-end" onClick={handleUpdateModule}>
                Update
        </button>
        
        <input className="form-control w-50" value={module.name}
          onChange={(e) =>  dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea className="form-control w-50 button-margin-top" value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>

        {
        modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
            <li key={index} className="list-group-item list-group-item-secondary module-styling">
              <button className="float-end btn btn-primary"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
              <button className="float-end button-margin btn btn-danger "
              onClick={() => handleDeleteModule(module._id)}>
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