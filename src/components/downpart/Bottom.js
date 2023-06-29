import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { BiCheckboxMinus } from 'react-icons/bi';
import { RiFridgeFill } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { MdOutlineKeyboardArrowRight, MdFastfood } from 'react-icons/md';
import './Bottom.css';

const Bottom = () => {
  const navigate = useNavigate();
  const [dishes, setDishes] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [selectedItems, setSelectedItems] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
      .then((response) => {
        const allDishes = [...response.data.dishes, ...response.data.popularDishes];
        setDishes(allDishes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddClick = () => {
    setSelectedItems(selectedItems + 1);
    setShowButton(true);
    setShowPopup(true);
  };

  const handlePopupClick = () => {
    setShowPopup(false);
    navigate('/page2');
  };

  return (
    <>
      <div className='main-d'>
        <div className='left'>
          Recommendation <IoMdArrowDropdown />
        </div>
        <div className='right'>
          <button className='button'>Menu</button>
        </div>
      </div>
      <div className='scrollable-content'>
        {dishes.map((dish, index) => (
          <div key={dish.id} className={`item ${index === 0 ? 'active' : ''}`}>
            <div className='items-part'>
              <div className='left-data'>
                <h6 className='name'>{dish.name}</h6>
                <i className='box'>
                  <BiCheckboxMinus />
                </i>
                <div className='rating'>
                  {dish.rating}
                  <i>
                    <AiFillStar />
                  </i>
                </div>
              </div>
              <div className='right-img'>
                <img src={dish.image} alt={dish.name} className='img' />
              </div>
            </div>
            <div className='left-data1'>
              <div className='f-icons'>
                <i>
                  <RiFridgeFill />
                </i>
                <span className='text'></span>
                <i>
                  <RiFridgeFill />
                </i>
                <span className='text'></span>
              </div>
              <div className='s-border'></div>
              <div className='a-text'>
                Ingredients <br />
                <span className='c-text'>
                  viewList <MdOutlineKeyboardArrowRight />
                </span>
              </div>
              <div>
                <button className='btn' onClick={handleAddClick}>
                  Add <span>+</span>
                </button>
              </div>
            </div>
            <div className='description'>{dish.description}</div>
          </div>
        ))}
      </div>
      {showButton && (
        <>
          <button className='black-button' onClick={handleAddClick}>
            <MdFastfood /> {selectedItems} items selected
          </button>
          {showPopup && (
            <div className='popup' onClick={handlePopupClick}>
              <h6>
                <MdFastfood />
                {selectedItems} food items selected <HiOutlineArrowNarrowRight />
              </h6>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Bottom;
