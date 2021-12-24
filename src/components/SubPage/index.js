import React from 'react';
import { Routes,Route, NavLink, Link } from 'react-router-dom';
import "./SubPage.css"
import Navigation from './page/navigation';
import Widgets from './page/Widgets';
import ExChange from './page/exchange';
import Dashboard from './page/Dashboard';


const SubPage = () => {
    return (
        <>
          {/* <div className="Container">
            <Navigation /> */}

            <div className="Body">
              <Routes>
                   <Route exact path="/" element={<Dashboard/>} />
                   <Route exact path="/dashboard" element={<Dashboard/>} />
                   <Route exact path="/excahnge" element={<ExChange/>} />
                   <Route exact path="/pool" element={<ExChange/>} />
                   <Route exact path="/address" element={<ExChange/>} />
                   <Route exact path="/settings" element={<ExChange/>} />
              </Routes>
            </div>

          {/* </div> */}
        </>
    )
}

export default SubPage;