import React from 'react'
import "./Orders.scss"
import SideBar from '../../../components/SideBar/SideBar'
import Navbar from '../../../components/Navbar/Navbar'
import RightSideBar from '../../../components/RightSideBar/RightSideBar'
import DataGridComponent from '../../../components/DataGridComponent/DataGridComponent'

const Orders = () => {
  return (
    <div className='orders'>
       <div className="sidebar">
    <SideBar/>
      </div>
      <div className="orderContainer">
      <Navbar/>
      <DataGridComponent/>
      </div>

      <div className="rightsidebar">
      <RightSideBar/>
      </div>
    </div>
  )
}

export default Orders
