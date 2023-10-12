import ModuleList from "../../Modules/ModuleList";
import {useLocation, Link } from "react-router-dom";
import {BsThreeDotsVertical, BsFillCheckCircleFill} from "react-icons/bs";
import {AiOutlinePlus, AiOutlineBell, AiOutlineCalendar} from "react-icons/ai";
import {FaFileImport, FaBullhorn} from "react-icons/fa";
import {RiLogoutCircleRLine} from "react-icons/ri";
import {BiTargetLock} from "react-icons/bi"
import {VscGraph} from "react-icons/vsc"
import './index.css';

function Home() {
    const { pathname } = useLocation();
  return (
    <div className="home-container">
        <div className="row">
            <div className="col-9" style={{paddingTop: 20}}>
                <button type="button" className="btn btn-secondary float-end"><span className="black-color"><BsThreeDotsVertical/></span></button>
                <button type="button" className="btn btn-danger button-margin float-end"><span className="icon-padding"><AiOutlinePlus/></span>Module</button>
                <div className="dropdown float-end button-margin">
                    <button className="btn btn-secondary dropdown-toggle black-color" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="green-color icon-padding"><BsFillCheckCircleFill/></span><span className="black-color">Publish All</span>
                    </button>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-secondary button-margin float-end"><span className="black-color">View Progress</span></button>
                <button type="button" className="btn btn-secondary button-margin float-end"><span className="black-color">Collapse All</span></button><br/><br/>
                <hr/>
                <ModuleList />
                </div>
                <div className="col-3">
                <ul className="list-group page-margin-right">
                    <Link to={pathname} className="list-group-item list-group-item-secondary list-group-item-action margin-bottom-list no-radius-border">
                        <span className="icon-padding"><FaFileImport/></span>Import Existing Content</Link>
                    <Link to={pathname} className="list-group-item list-group-item-secondary list-group-item-action margin-bottom-list no-radius-border">
                        <span className="icon-padding"><RiLogoutCircleRLine/></span>Import From Commons</Link>
                    <Link to={pathname} className="list-group-item list-group-item-secondary list-group-item-action margin-bottom-list no-radius-border">
                        <span className="icon-padding"><BiTargetLock/></span>Choose Home Page</Link>
                    <Link to={pathname} className="list-group-item list-group-item-secondary list-group-item-action margin-bottom-list no-radius-border">
                        <span className="icon-padding"><VscGraph/></span>View Course Stream</Link>
                    <Link to={pathname} className="list-group-item list-group-item-secondary list-group-item-action margin-bottom-list no-radius-border">
                        <span className="icon-padding"><FaBullhorn/></span>New Announcement</Link>
                    <Link to={pathname} className="list-group-item list-group-item-secondary list-group-item-action margin-bottom-list no-radius-border">
                        <span className="icon-padding"><VscGraph/></span>New Analytics</Link>
                    <Link to={pathname} className="list-group-item list-group-item-secondary list-group-item-action no-radius-border">
                    <span className="icon-padding"><AiOutlineBell/></span>View Course Notifications</Link>
                </ul>
                <br/>

                <h4>Coming Up</h4>
                <ul className="list-group page-margin-right">
                    <li className="list-group-item"><i className="fa-regular fa-calendar grey-icon icon-padding"></i> View Calendar</li>
                    <li className="list-group-item">
                        <span className="grey-color icon-padding"><AiOutlineCalendar/></span>
                        <Link to={pathname} className="link-style">Lecture</Link><br/><span className="text-indent">CS4550.12631.202410</span><br/>
                        <span className="text-indent">Sep 7 at 11:45am</span>
                    </li>
                    <li className="list-group-item">
                        <span className="grey-color icon-padding"><AiOutlineCalendar/></span>
                        <Link to={pathname} className="link-style">Lecture</Link><br/><span className="text-indent">CS4550.12631.202410</span><br/>
                        <span className="text-indent">Sep 11 at 11:45am</span>
                    </li>
                    <li className="list-group-item">
                        <span className="grey-color icon-padding"><AiOutlineCalendar/></span>
                        <Link to={pathname} className="link-style">Lecture</Link><br/><span className="text-indent">CS4550.12631.202410</span><br/>
                        <span className="text-indent">Sep 11 at 6pm</span>
                    </li>
                </ul>
                </div>
        </div>
  </div>
  );
}
export default Home;