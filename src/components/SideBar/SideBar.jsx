import React,{useState} from "react";
import "./SideBar.scss";
import ByeWind from "../../../src/assets/images/ByeWind.svg";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook,faIdCard,faIdBadge } from '@fortawesome/free-solid-svg-icons'; 
import { CIcon } from '@coreui/icons-react';
import {cilChatBubble} from "@coreui/icons";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(true);
    const [selectedDashboard, setSelectedDashboard] = useState("Default"); 
    const toggleUserProfileDropdown = () => {
        setIsUserProfileOpen((prevState) => !prevState);
      };
      const handleDashboardClick = (dashboard) => {
        setSelectedDashboard(dashboard); 
    };
  return (
    <div className="sidebar">
      <div className="top">
        <div className="person_img">
          <img src={ByeWind} alt="No img" />
        </div>
        <div className="person_name">ByeWind</div>
      </div>

      <div className="favourites_recent">
        <div className="title">
          <button className="title_button">Favourites</button>
          <button className="title_button">Recenlty</button>
        </div>
        <div className="items_list">
          <ul className="items">
            <li className="item">
              <span>Overview</span>
            </li>
            <li className="item">
              <span>Projects</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="dashboard_Section">
        <div className="dashboard_title">Dashboards</div>
        <div className="dashboard_items_list">
          {/* <div className="dashboard_item">
            <KeyboardArrowRightOutlinedIcon className="arrow_icon" />
            <div className="inner_item">
              <DonutSmallOutlinedIcon className="icon" />
              <span>Default</span>
            </div>
          </div> */}
          <div className={`dashboard_item ${selectedDashboard === "Default" ? "selected" : ""}`} onClick={() => handleDashboardClick("Default")}>
                        <KeyboardArrowRightOutlinedIcon className="arrow_icon" />
                        <Link to="/" style={{textDecoration:"none"}}>
                        <div className="inner_item">
                            <DonutSmallOutlinedIcon className="icon" />
                            <span>Default</span>
                        </div>
                        </Link>
                    </div>
          <div className="dashboard_item">
            <KeyboardArrowRightOutlinedIcon className="arrow_icon" />
            <div className="inner_item">
              <LocalMallOutlinedIcon className="icon" />
              <span>Ecommerce</span>
            </div>
          </div>
          <div className="dashboard_item">
            <KeyboardArrowRightOutlinedIcon className="arrow_icon" />
            <div className="inner_item">
              <FolderOpenOutlinedIcon className="icon" />
              <span>Projects</span>
            </div>
          </div>
          <div className="dashboard_item">
            <KeyboardArrowRightOutlinedIcon className="arrow_icon" />
            <div className="inner_item">
              <ImportContactsOutlinedIcon className="icon" />
              <span>Online courses</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pages_section">
        <div className="page_title">Pages</div>
        <div className="pages_itemlist">
          <div className="page_items">
          <div className="page_item" onClick={toggleUserProfileDropdown}>
            {isUserProfileOpen ? (
              <KeyboardArrowDownOutlinedIcon className="arrow_icon" />
            ) : (
              <KeyboardArrowRightOutlinedIcon className="arrow_icon" />
            )}
            <div className="inner_item">
              <FontAwesomeIcon icon={faIdBadge} className="icon" />
              <span>User Profile</span>
            </div>
          </div>
          {isUserProfileOpen && (
            <div className="dropdown_list">
              <div className="dropdown_item">Overview</div>
              <div className="dropdown_item">Projects</div>
              <div className="dropdown_item">Campaigns</div>
              <div className="dropdown_item">Documents</div>
              <div className="dropdown_item">Followers</div>
            </div>
          )}
            <div className="page_item">
              <KeyboardArrowRightOutlinedIcon className="arrow_icon" />
              <div className="inner_item">
                {/* <ContactMailOutlinedIcon className="icon" /> */}
                <FontAwesomeIcon icon={faIdCard} className="icon" />
                <span>Account</span>
              </div>
            </div>

            <div className="page_item">
              <KeyboardArrowRightOutlinedIcon className="arrow_icon" />
              <div className="inner_item">
                <GroupsOutlinedIcon className="icon" />
                <span>Corporate</span>
              </div>
            </div>

            <div className="page_item">
              <KeyboardArrowRightOutlinedIcon className="arrow_icon" />
              <div className="inner_item">
                {/* <LocalMallOutlinedIcon className="icon" /> */}
                <FontAwesomeIcon icon={faBook} className="icon" />
                <span>Blog</span>
              </div>
            </div>

            <div className="page_item">
              <KeyboardArrowRightOutlinedIcon className="arrow_icon" />
              <CIcon icon={cilChatBubble}  className="core_icon" size="sm"/>
              <div className="inner_item">
              {/* <FontAwesomeIcon icon={faComments} className="icon" /> */}
              
                <span>Social</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
