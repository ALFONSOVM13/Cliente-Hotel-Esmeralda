import "./App.css";

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeView from './views/HomeView';
import Navbar from './components/navbar/Navbar';

import LandingView from "./views/LandingView";
import DetailView from "./views/DetailView";
import Rooms from "./views/RoomsView";
import Restaurant from "./views/Restaurant";
import LoginView from "./views/LoginView";
import TermsAndConditionsView from "./views/TermsAndConditions";
import ResultsView from "./views/ResultView";

function App() {



  return (
       <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/landing' element={<LandingView />} />
          <Route path="/detail/:id" element={<DetailView />} />
          <Route path="/rooms" element={<Rooms/>}/>
          <Route path="/restaurant" element={<Restaurant/>}/>
          <Route path="/login" element={<LoginView/>}/>
          <Route path="/register" element={<LoginView/>}/>  
          <Route path="/results" element={<ResultsView />} />
          <Route path="/termsAndConditions" element={<TermsAndConditionsView/>}/>
        </Routes>   
      </Router>   
   );
}

export default App;
