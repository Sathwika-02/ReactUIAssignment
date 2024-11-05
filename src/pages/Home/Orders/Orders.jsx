import React,{useState} from 'react'
import "./Orders.scss"
import SideBar from '../../../components/SideBar/SideBar'
import Navbar from '../../../components/Navbar/Navbar'
import RightSideBar from '../../../components/RightSideBar/RightSideBar'
import DataGridComponent from '../../../components/DataGridComponent/DataGridComponent'
import MenuIcon from "@mui/icons-material/Menu"
const Orders = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isrightsidebaropen,setisrightsidebaropen]=useState(false);

const toggleSidebar = () => {
  setSidebarOpen(!isSidebarOpen);
};
const togglerightsidebar=()=>{
  setisrightsidebaropen(!isrightsidebaropen)
}
  return (
    <div className='orders'>
       {/* <div className="sidebar">
    <SideBar/>
      </div> */}
      
      <div className="menu-icon" onClick={toggleSidebar}>
        <MenuIcon fontSize="large" />
      </div>
      <div className="menu-icon1" onClick={togglerightsidebar}>
        <MenuIcon fontSize="large" />
      </div>

      {/* Sidebar component */}
      <SideBar opensidebar={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="orderContainer">
      <Navbar/>
      <DataGridComponent/>
      </div>

      {/* <div className="rightsidebar">
      <RightSideBar/>
      </div> */}
       <div className="rightsidebar">
      <RightSideBar openrightsidebar={isrightsidebaropen} togglerightsidebar={togglerightsidebar}/>
      </div>
    </div>
  )
}

export default Orders
