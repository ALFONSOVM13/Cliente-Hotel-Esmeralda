import "./App.css";

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeView from './views/HomeView';
import Navbar from './components/navbar/Navbar';

import LandingView from "./views/LandingView";

import DetailView from "./views/DetailView";

function App() {



  return (
       <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/landing' element={<LandingView />} />
          <Route path="/detail/:id" element={<DetailView />} />
        </Routes> 
      </Router>   
   );
}

export default App;
