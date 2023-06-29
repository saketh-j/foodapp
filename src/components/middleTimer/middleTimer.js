import React from 'react';
import './middleTimer.css'
import {SlCalender} from 'react-icons/sl';
import{FcAlarmClock} from 'react-icons/fc'

const MiddleTimer = () => {
  return (
    <>
       <div className='header-right'>
         <div className='header-time-tracker'>
            <div className='wrapper'>
                <i><SlCalender className='absolute-center calender-icon'/></i>
                <input type="text" className='search-input'
                placeholder='28 jun 2023' />
            
            </div>
            <div className='separator'></div>
            <div className='header-searchBar'>
               <i><FcAlarmClock className='absolute-center clock-icon'/></i>
               <input type="text" className='search-input'
                placeholder='10.30pm-12.30pm' />
            </div>
         </div>
         </div>
    </>
  );
}

export default MiddleTimer;
