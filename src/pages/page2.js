import React, { useEffect, useState } from 'react';
import './page2.css';
import {AiFillStar} from 'react-icons/ai'
import{FcAlarmClock} from 'react-icons/fc'
import { MdArrowBackIosNew } from 'react-icons/md';
import Header from '../components/Header/Header';

const Page2 = () => {
  const [dishData, setDishData] = useState(null);

  useEffect(() => {
    fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1')
      .then(response => response.json())
      .then(data => setDishData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="main-bg">
        <div className="container" >
          <Header />
          <i>
            <MdArrowBackIosNew />
          </i>
        <div className='main-content'>
        <div className="content">
            {dishData && (
              < >
                <h6 className='name'>{dishData.name}</h6>
                <p className='rating'>4.2{dishData.rating}<i>
                    <AiFillStar/>
                  </i></p>
              </>
            )}
           
          </div>
          
          <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyVMDdoJAxbwg9VBnQ5feSJ7ZXh2x8MI41A&usqp=CAU" className='img' alt="" />
              </div>
              
        </div>
        <p className='text'>Mughlai masala is style of cookery developed in the indian subcontinent by the imperial Kitchens of mughal empire</p>

        <div>
            <div><FcAlarmClock/> 1 hour</div> 
            <div className='line'></div>
        </div>
        <div className='text-div'>
        <h5>Ingredients</h5>
        <h6 className='a-text'>For 2 people</h6>
        </div>

        </div>
      </div>
    </>
  );
};

export default Page2;
