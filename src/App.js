import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from './components/MainPage';
import SubPage from './components/SubPage';

const App = () => {
  return (
      <>
          <Routes>
            <Route exact path="/" element={<MainPage/>} />
            <Route exact path="/dashboard" element={<SubPage/>} />
            <Route exact path="/exchange" element={<SubPage/>} />
            <Route exact path="/pool" element={<SubPage/>} />
            <Route exact path="/save" element={<SubPage/>} />
            <Route exact path="/adress" element={<SubPage/>} />
            <Route exact path="/farm" element={<SubPage/>} />
            <Route exact path="/valuts" element={<SubPage/>} />
            <Route exact path="/bridge" element={<SubPage/>} />
            <Route exact path="/revoke" element={<SubPage/>} />
            <Route exact path="/settings" element={<SubPage/>} />
          </Routes>
      </>
  );
}

export default App;
