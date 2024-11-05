import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import "./home.scss";
import { useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/widgets/Widget'
import Barchart from '../../components/Charts/Barchart/Barchart'
import Linechart from '../../components/Charts/Linechart/Linechart'
import RevenueChart from '../../components/Charts/location/RevenueChart'
import RevenueMap from '../../components/Charts/location/RevenueMap'
import DataTable from '../../components/DataTable/DataTable'
import RingChart from '../../components/Charts/Doughnut/RingChart'
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import MenuIcon from "@mui/icons-material/Menu"
const Home = () => {
    const navigate = useNavigate();
    const { darkMode } = useContext(DarkModeContext);
    const widgetData = useSelector((state) => state.widgets);
    console.log("widgetdata",widgetData);
    console.log(widgetData.customers.count)
    const chartBackgroundColor = darkMode ? '#282828' : '#f7f9fb';
    const handleOrdersClick = () => {
      navigate('/orders');
    };
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isrightsidebaropen,setisrightsidebaropen]=useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const togglerightsidebar=()=>{
    setisrightsidebaropen(!isrightsidebaropen)
  }

  return (
    <div className='home'>
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
      <div className="homeContainer">
        <Navbar/>
      
    <div className="home_title">eCommerce</div>

    <div className="first_container">
        <div className="widgets">
            {/* <Widget type="Customers" color="#e3f5ff" count="3781" increase="+11.01%" increment="true"/>
            <Widget type="Orders"  color="#f7f9fb"count="1219" increase="-0.03%" increment="false" onClick={handleOrdersClick} isDarkMode={darkMode} />
            <Widget type="Revenue" color="#f7f9fb" count="$695" increase="+15.03%" increment="true" isDarkMode={darkMode} />
            <Widget type="Growth" color="#e5ecf6" count="30.1%" increase="+6.08%" increment="true"/> */}
            <Widget
                            type="Customers"
                            color="#e3f5ff"
                            count={widgetData.customers.count} 
                            increase={widgetData.customers.increase} 
                            increment={widgetData.customers.increment} 
                        />
                        
                        <Widget
                            type="Orders"
                            color="#f7f9fb"
                            count={widgetData.orders.count} 
                            increase={widgetData.orders.increase} 
                            increment={widgetData.orders.increment} 
                            onClick={handleOrdersClick} 
                            isDarkMode={darkMode} 
                        />
                      
                        <Widget
                            type="Revenue"
                            color="#f7f9fb"
                            count={widgetData.revenue.count} 
                            increase={widgetData.revenue.increase} 
                            increment={widgetData.revenue.increment} 
                            isDarkMode={darkMode} 
                        />
                        <Widget
                            type="Growth"
                            color="#e5ecf6"
                            count={widgetData.growth.count}
                            increase={widgetData.growth.increase} // Pass the increase percentage for growth
                            increment={widgetData.growth.increment} // Pass the increment boolean for growth
                        />
        </div>
        <div className="bar_chart">
             <Barchart/>
        </div>
    </div>


<div className="secondContainer">
    
    <div className="line_chart">
        <Linechart/>
    </div>
    
    <div className="revenue_charts"  style={{
        backgroundColor: chartBackgroundColor,
        border: darkMode ? '2px solid #282828' : '2px solid #f7f9fb'
    }}>
        
        <RevenueMap/>
        <RevenueChart/>
        </div>
    
</div>


<div className="thirdContainer">
    <div className="data_table">
        <DataTable/>
    </div>

    <div className="dough_chart">
       <RingChart/>
    </div>
</div>
      </div>
      <div className="rightsidebar">
      <RightSideBar openrightsidebar={isrightsidebaropen} togglerightsidebar={togglerightsidebar}/>
      </div>
    </div>
  )
}

export default Home
