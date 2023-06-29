import React from 'react';
import "./Header.css"
import {PiCellSignalFull,PiWifiHigh,PiBatteryMediumFill} from 'react-icons/pi'

const Header = () => {
  return (
    <> 
          <div className='top-header'>
          <div className='time'>10.05 Am </div>
          <div className='symbols'>
            <i className='icons'><PiCellSignalFull/></i>
            <i className='icons'><PiWifiHigh/></i>
            <i className='icons'><PiBatteryMediumFill/></i>
        </div>
          </div>
    </>
  );
}

export default Header;
