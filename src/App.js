import React, {useState} from 'react';
import { FaGasPump } from 'react-icons/fa';
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
import Quests from './components/SubPage/page/Quests';
import Settings from './components/SubPage/page/settings';
import Widgets from './components/SubPage/page/Widgets';

const App = () => {
  const [sidebar, setSidebar] = useState(false);


  const showSidebar =  () => setSidebar(!sidebar);

  return (
      <>
          <Routes>
            <Route exact path="/" element={<MainPage/>} />
          </Routes>


         <div className="Container">
           {/* Navigation */}
           <Navigation />    
         {/* BodyComponent */}
         <div className="Body">
           <div className="app-header">
             <div className="app-header-hidden">
               <div className="app_container">
                        <div className="blockie_left">
                          <div className="blockie" onClick={() => setSidebar(!showSidebar)}></div>
                        </div>
                        <div className="blockie_center">
                            <img src={process.env.PUBLIC_URL + "/images/zapper.png"} />
                        </div>
                        <div className="blockie_right">right</div>
                    </div>
                    <div className="mobile-header">
                        <img src={process.env.PUBLIC_URL + "/images/ethereum-icon.png"} />
                        <p>Ethereum</p>
                        <div className="point"></div>
                        <FaGasPump className="icon"/>
                        <span>51</span>
                    </div>
             </div>
           </div>
           <div className="wrapper">
             <div className="top">
           <Routes>
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route exact path="/dashboard/nft" element={<Dashboard/>} />
            <Route exact path="/dashboard/history" element={<Dashboard/>} />
  
            <Route exact path="/exchange"  element={<ExChange /> } /> 
            <Route exact path="/pool"  element={<Pool /> } /> 
            <Route exact path="/save"  element={<Pool /> } /> 
            <Route exact path="/farm"  element={<Pool /> } /> 
            <Route exact path="/valuts"  element={<Pool /> } /> 
            <Route exact path="/revoke"  element={<Pool /> } /> 
            <Route exact path="/save"  element={<Pool /> } /> 
            <Route exact path="/address"  element={<Address /> } /> 
            <Route exact path="/settings"  element={<Settings /> } /> 
            <Route exact path="/exchange"  element={<ExChange /> } /> 
            <Route exact path="/quests" element={<Quests/>} />
           </Routes>
           </div>
            <div className="bottom">
            <Footer /> 
            </div>
          </div>
           </div>
           {/* Widgets Compoent */}
          <Widgets />

           </div>
      </>
  );
}

export default App;
