import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from './components/MainPage';
import SubPage from './components/SubPage';
import Address from './components/SubPage/page/Address';
import Dashboard from './components/SubPage/page/Dashboard';
import ExChange from './components/SubPage/page/exchange';
import Footer from './components/SubPage/page/footer';
import Navigation from './components/SubPage/page/navigation';
import Pool from './components/SubPage/page/Pool';
import Settings from './components/SubPage/page/settings';
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
           <div className="wrapper">
             <div className="top">
           <Routes>
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route exact path="/exchange"  element={<ExChange /> } /> 
            <Route exact path="/pool"  element={<Pool /> } /> 
            <Route exact path="/save"  element={<Pool /> } /> 
            <Route exact path="/address"  element={<Address /> } /> 
            <Route exact path="/settings"  element={<Settings /> } /> 
            <Route exact path="/exchange"  element={<ExChange /> } /> 
           </Routes>
           </div>
            <div className="bottom">
            <Footer /> 
            </div>
          </div>
           </div>
          <Widgets />

           </div>
      </>
  );
}

export default App;
