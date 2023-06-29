import React, { useEffect, useState } from 'react';
import './TopDishes.css'
import Axios from 'axios'


const TopDishes = () => {
    const [dishes,setDishes] = useState([]);
    
    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await Axios.get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/');
                const { dishes, popularDishes } = response.data;
                const allDishes = [...dishes, ...popularDishes];
                setDishes(allDishes);
              } catch (error) {
                console.error('Error fetching images:', error);
              } };
        fetchDishes();
      }, []);
      
  return (
    <>
      <div>
        <h5>Top Dishes</h5>
         <div className='dishes'>
         {dishes.map((dish,index) => (
           <div className="dish-img-container" key={index}>
           <img src={dish.image} alt={dish.name} className="dish-img" />
           <div className="dish-name">{dish.name}</div>
         </div>
            
            ))}
         </div>
      </div>
    </>
  );
}

export default TopDishes;
