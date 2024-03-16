import "./App.css";

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import HomeView from './views/HomeView';

import LandingView from "./views/LandingView";

function App() {

//   const location = useLocation();
//   const [showModal, setShowModal] = useState(true); 
 
//  useEffect(() => {
//   // Comprueba si la ubicación actual es la página de inicio
//   if (location.pathname === '/') {
//      setShowModal(true);
//   }
//  }, [location]);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/landing' element={<LandingView />} />
        </Routes> 
      </Router>   
    </Provider>
  );
}

export default App;
