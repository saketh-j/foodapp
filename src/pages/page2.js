import React, { useEffect, useState } from 'react';
import './page2.css';
import { AiFillStar } from 'react-icons/ai';
import { FcAlarmClock } from 'react-icons/fc';
import { MdArrowBackIosNew, MdArrowDropDown } from 'react-icons/md';
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
        <div className="container">
          <Header />
          <i>
            <MdArrowBackIosNew />
          </i>
        <div className='scrollable-content'>
        <div className="main-content ">
            <div className="content">
              {dishData && (
                <>
                  <h6 className="name">{dishData.name}</h6>
                  <p className="rating">
                    4.2
                    {dishData.rating}
                    <i>
                      <AiFillStar />
                    </i>
                  </p>
                </>
              )}
            </div>

            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyVMDdoJAxbwg9VBnQ5feSJ7ZXh2x8MI41A&usqp=CAU"
                className="img"
                alt=""
              />
            </div>
          </div>

          <p className="text">
            Mughlai masala is a style of cookery developed in the Indian subcontinent by the imperial Kitchens of Mughal Empire.
          </p>

          <div className="time">
            <div>
              <FcAlarmClock /> 1 hour
            </div>
            <div className="line"></div>
          </div>
             <div>
                <h4> Ingredients </h4>
                <span className='a-text'>For 2 Persons</span>
             </div>

          <div className="ingredients">
            <div className="heading">
              Vegetables  <MdArrowDropDown />
            </div>
            {dishData && (
              <ul>
                {dishData.ingredients.vegetables.map((vegetable, index) => (
                  <li key={index}>
                    <span className="ingredient-info">
                      <span>{vegetable.name}</span>
                      <span className="quantity">{vegetable.quantity}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="heading">
              Spices  <MdArrowDropDown /> 
            </div>
            {dishData && (
              <ul>
                {dishData.ingredients.spices.map((spice, index) => (
                  <li key={index}>
                    <span className="ingredient-info">
                      <span>{spice.name}</span>
                      <span className="quantity">{spice.quantity}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="heading">
              Appliances  <MdArrowDropDown /> 
            </div>
           <div className='images'>
           <img className='imgs' src="https://images.samsung.com/is/image/samsung/p6pim/in/rt28a3453s8-hl/gallery/in-253l-double-door-refrigerator-digital-inverter-technology-rt28a3453s8-rt28a3453s8-hl-534502359?$650_519_PNG$" alt="" />
            <img className='imgs' src="https://images.samsung.com/is/image/samsung/p6pim/in/rt28a3453s8-hl/gallery/in-253l-double-door-refrigerator-digital-inverter-technology-rt28a3453s8-rt28a3453s8-hl-534502359?$650_519_PNG$" alt="" />
            <img className='imgs' src="https://images.samsung.com/is/image/samsung/p6pim/in/rt28a3453s8-hl/gallery/in-253l-double-door-refrigerator-digital-inverter-technology-rt28a3453s8-rt28a3453s8-hl-534502359?$650_519_PNG$" alt="" />
           </div>


           
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
