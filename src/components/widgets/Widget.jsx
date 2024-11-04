import React from 'react'
import "./widget.scss"
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
const Widget = ({type,color,count,increase,increment,onClick,isDarkMode}) => {
    const textColor = isDarkMode ? '#fff' : '#000'; 
    const widgetBackgroundColor = isDarkMode ? "#282828" : color;

  return (
    <div className='widget' style={{backgroundColor:widgetBackgroundColor}} onClick={onClick}>
      <div className="widget_container"  style={{ color: textColor }}>
            <div className="widget_title">
                <p>{type}</p>
            </div>

            <div className="widget_item">
                 <div className="widget_left">
                    <span className='widget_count'>{count}</span>
                    
                 </div>
                 <div className="widget_right">
                    <span>{increase}</span>
                    {increment==="true"?<TrendingUpOutlinedIcon className='icon'/>:<TrendingDownOutlinedIcon className='icon'/>}

                 </div>
            </div>
        </div>
    </div>
  )
}

export default Widget
