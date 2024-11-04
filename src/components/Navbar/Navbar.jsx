import React from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";
import { CIcon } from "@coreui/icons-react";
import { cilStar, cilCommand } from "@coreui/icons";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import LightModeIcon from '@mui/icons-material/LightMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft,faBell } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from '../../context/darkModeContext';
import { Link } from "react-router-dom";
const Navbar = () => {
    const {dispatch}=useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="breadcrumb_icons">
          <FontAwesomeIcon icon={faRectangleList} className="icon" />
          <CIcon icon={cilStar} className="core_icon" />
          <p className="breadcrumb_title">
            <Link to="/" className="dashboard"><span>Dashboards</span> </Link>&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;<span>Default</span>
          </p>
        </div>
        <div className="right">
          <div className="search">
            <SearchOutlinedIcon className="icon search_icon" />
            <input type="text" placeholder="Search" />

            <CIcon icon={cilCommand} className="core_icon1 search_icon" />
            <span className="search_icon_span search_icon">&nbsp;/</span>
          </div>

         <LightModeIcon className="icon" style={{cursor:"pointer"}}  onClick={()=>dispatch({type:"TOGGLE"})}/>
         <FontAwesomeIcon icon={faClockRotateLeft} className="icon" />
         <FontAwesomeIcon icon={faBell}  className="icon"/>
         <FontAwesomeIcon icon={faRectangleList} className="icon" />
         {/* <CIcon icon={cilSun}  className="core_icon"/> */}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
