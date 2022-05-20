import "./sidebar.css";
import {
  LineStyle,
  BarChart,
  PlaylistAddCheck,
  LocalLaundryService,
  LocalShipping,
  AllInbox,
  PeopleAlt,
  Equalizer,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Equalizer className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PeopleAlt className="sidebarIcon" />
                Users
              </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Laundry</h3>
          <ul className="sidebarList">
            <Link to="/laundryList" className="link">
              <li className="sidebarListItem">
                <PlaylistAddCheck className="sidebarIcon" />
                Laundry List
              </li>
            </Link>
            <Link to="/laundryCategory" className="link">
            <li className="sidebarListItem">
              <LocalLaundryService className="sidebarIcon" />
              Laundry Category
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Storage</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LocalShipping className="sidebarIcon" />
              Supply List
            </li>
            <li className="sidebarListItem">
              <AllInbox className="sidebarIcon" />
              Inventory
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
