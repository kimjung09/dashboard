import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from './components/MainPage';
import SubPage from './components/SubPage';
import Dashboard from './components/SubPage/page/Dashboard';
import ExChange from './components/SubPage/page/exchange';
import Navigation from './components/SubPage/page/navigation';
import Widgets from './components/SubPage/page/Widgets';

const App = () => {
  return (
      <>
          <Routes>
            <Route exact path="/" element={<MainPage/>} />
          </Routes>


         <div className="Container">
           <Navigation />
         
         <div className="Body">
           <div className="app-header">
             <div className="app-header-hidden">
               <div className="app_container">
                  123
               </div>
               <div className="mobile-header">

               </div>
             </div>
           </div>
           <Routes>
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route exact path="/exchange"  element={<ExChange /> } /> 
            <Route exact path="/pool"  element={<ExChange /> } /> 
            <Route exact path="/address"  element={<ExChange /> } /> 
            <Route exact path="/settings"  element={<ExChange /> } /> 
            <Route exact path="/exchange"  element={<ExChange /> } /> 

           </Routes>
           </div>
          
          <Widgets />

           </div>
      </>
  );
}

export default App;
