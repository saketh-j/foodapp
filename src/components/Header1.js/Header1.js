import React from 'react';
import './Header1.css'
import {MdArrowBackIosNew} from "react-icons/md"

const Header1 = () => {
  return (
    <>
       <div className='main'>
          <div className='left'>
             <i className='icon'><MdArrowBackIosNew/></i>
          </div>
          <div className='right'>
              <h4>Select Dishes</h4>
          </div>
       </div>
    </>
  );
}

export default Header1;
