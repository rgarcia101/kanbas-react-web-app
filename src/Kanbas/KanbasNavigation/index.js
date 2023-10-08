import './index.css'
import { Link, NavLink, useLocation } from "react-router-dom";
import {BiSolidUserCircle} from "react-icons/bi";
import {TfiDashboard} from "react-icons/tfi";
import {FaBook} from "react-icons/fa";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import {HiInboxArrowDown} from "react-icons/hi2";
import {AiFillClockCircle} from "react-icons/ai";
import {PiMonitorPlayBold} from "react-icons/pi";
import {RiLogoutCircleRLine} from "react-icons/ri";
import {BiHelpCircle} from "react-icons/bi";





function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linkToIconMap = {
    Account: <BiSolidUserCircle className="wd-icon" id="id-account-image" />,
    Dashboard: <TfiDashboard className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <HiInboxArrowDown className="wd-icon" />,
    History: <AiFillClockCircle className="wd-icon" />,
    Studio: <PiMonitorPlayBold className="wd-icon" />,
    Commons: <RiLogoutCircleRLine className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />
  };
  
  const { pathname } = useLocation();
  const activeLinkName = links.find(link => pathname.includes(link));
  return (
    <div className="list-group" id="id-principle-nav">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"} wd-principle-nav-links`}
          style={pathname.includes(link) && link === "Dashboard" || pathname.includes(link) && link === "Account"
          || pathname.includes(link) && link === "Courses" || pathname.includes(link) && link === "Calendar" 
          || pathname.includes(link) && link === "Inbox" || pathname.includes(link) && link === "History" 
          || pathname.includes(link) && link === "Studio" || pathname.includes(link) && link === "Commons"
          || pathname.includes(link) && link === "Help" ? { background: 'white', color: 'red' } : {}}
          >
          
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;