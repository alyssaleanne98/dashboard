import Analysis from './Components/Analysis';
import Rating from './Components/Rating';
import Reviews from './Components/Reviews';
import SideBar from './Components/SideBar';
import Visitors from './Components/Visitors';
import './App.css';
// import { Component } from 'react';

function Components() {
  return (
    <div className="Components">
     <Analysis />
     <Rating />
     <Reviews />
     <SideBar />
     <Visitors />
    </div>
  );
}

export default Components;
