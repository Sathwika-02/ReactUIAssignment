import React from 'react'
import {VectorMap} from "@react-jvectormap/core";
import { worldMill} from "@react-jvectormap/world"
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/darkModeContext';
import { useSelector } from 'react-redux';
import "./RevenueMap.scss"
const RevenueMap = () => {
    const {darkMode}=useContext(DarkModeContext)

    const locations = useSelector((state) => state.locations.locations);
      
  return (
    <div  className='revenue_map'>
         <h5 className='revenue_location' style={{ color: darkMode ? "#fff" : "#000" }}>Revenue by Location</h5>
        <VectorMap
          markers={locations}
          markerStyle={{
            initial: {
               fill: darkMode ? 'red' : 'black',
              r:3
            },
          }}
        map={worldMill}
        backgroundColor="darkMode?'#1c1c1c' :'#f7f9fb'"
        regionStyle={{
            initial: {
                 fill: darkMode ? '#67780' : '#cfdfeb'
            },
        }}
        />

      
    </div>
  )
}

export default RevenueMap
