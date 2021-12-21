import React from 'react';
import { Routes,Route, NavLink, Link } from 'react-router-dom';
import "./SubPage.css"
import Dash from './page';
import Navigation from './page/navigation';


const SubPage = () => {
    return (
        <>
          <div className="Container">
            <Navigation />
            <Routes>
                <Route exact path="/dashboard" element={<Dash/>}  />
                <Route exact path="/exchange" element={<Dash/>} />
            </Routes>
          </div>
        </>
    )
}

export default SubPage;