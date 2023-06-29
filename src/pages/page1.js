import React from 'react';
import Header from '../components/Header/Header';
import './page1.css'
import Header1 from '../components/Header1.js/Header1';
import Navbar from '../components/Navbar';
import MiddleTimer from '../components/middleTimer/middleTimer';
import Filters from '../components/filters/Filters';
import TopDishes from '../components/topDishes/TopDishes';
import Bottom from '../components/downpart/Bottom';

const Page1 = () => {
  return (
    <>
     <div className='main-bg'>
     <div className='container'>
          <Header/>
          <Header1/>
          <Navbar/>
          <MiddleTimer />
          <Filters/>
          <TopDishes/>
          <div className='border'></div>
          <Bottom/>
      </div>
     </div>
    </>
  );
}

export default Page1;
