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

          </Routes>
      </>
  );
}

export default App;
