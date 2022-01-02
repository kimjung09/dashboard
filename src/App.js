import React, {useEffect, useRef, useState} from 'react';
import { FaGasPump } from 'react-icons/fa';
import {Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from './components/MainPage';
import SubPage from './components/SubPage';
import Address from './components/SubPage/page/Address';
import Allow from './components/SubPage/page/Allowances';
import Dashboard from './components/SubPage/page/Dashboard';
import ExChange from './components/SubPage/page/exchange';
import Footer from './components/SubPage/page/footer';
import Navigation from './components/SubPage/page/navigation';
import Pool from './components/SubPage/page/Pool';
import Quests from './components/SubPage/page/Quests';
import Rewords from './components/SubPage/page/Rewords';
import Settings from './components/SubPage/page/settings';
import Widgets from './components/SubPage/page/Widgets';
import {AiFillWarning} from 'react-icons/ai'
import {GiCancel} from 'react-icons/gi'
import Valuts from './components/SubPage/page/Valuts';
import Search from './components/search';
import Bridge from './components/SubPage/page/Bridge';
import Save from './components/SubPage/page/Save';
import { useDetectOutsideClick } from './components/SubPage/page/navigation/useDetect';
import MobileNav from './components/SubPage/page/navigation/mobile-navigation';

const App = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setMenu] = useState(false);
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);



  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth < 600) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    setButton();
  })

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  }

  window.addEventListener('resize', setButton);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const modalClose = (e) => {
      setModalOpen(!modalOpen);

      if (e.target === e.currentTarget) {
          modalClose();
      }
  }


  
  console.log(process.env.REACT_APP_MODE);

  return (
      <>
          <Routes>
            <Route exact path="/" element={<MainPage/>} />
          </Routes>

         <div className="Container">
           {/* Navigation */}
           <Navigation onClick={(props) => modalClose(true)}/>    
          {/* BodyComponent */}
            <div className="Body">
              <nav 
                 ref={dropdownRef}
                  className={`app ${isActive ? "active" : "isactive"}`} 
             >
               <div className="app-content-open">
                 <MobileNav  />
               </div>
            </nav>
            <div className="app-header" props={props}>
             <div className="app-header-hidden">
               <div className="app_container">
                        <div className="blockie_left" onClick={onClick}>
                          <div className="blockie"></div>
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
            <Route exact path="/save"  element={<Save /> } /> 
            <Route exact path="/farm"  element={<Pool /> } /> 
            <Route exact path="/valuts"  element={<Valuts /> } /> 
            <Route exact path="/revoke"  element={<Allow /> } /> 
            <Route exact path="/address"  element={<Address /> } /> 
            <Route exact path="/settings"  element={<Settings /> } /> 
            <Route exact path="/settings/:id" element={<Settings/>}/>
            <Route exact path="/bridge"  element={<Bridge /> } /> 
            <Route exact path="/quests" element={<Quests/>}/>
            <Route exact path="/rewards" element={<Rewords/>} />
            <Route exact path="/token" element={<Search/>}/>
            <Route exact path="/token/:id" element={<Rewords/>}/>
        </Routes>
           <div className="hidden-top">
                  <Routes></Routes>
              
              <div className="notifier">
                 <div className="notifer-body">
                    <div className="notifer-body_alert" role="alert">
                      <div className="notifer-body_content">
                        <div className="waring">
                          <div className="flex">
                             <AiFillWarning className="icon" />
                          </div>
                        </div>
                        <h1>A signature is required for this action.</h1>
                      </div>
                    </div>
                    <button><GiCancel/></button>

                 </div>
                </div>  
             </div>
           </div>
           <div className="flex-max"></div>
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
