import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "../public/vite.svg";
import "./App.css";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import HomeView from './views/HomeView';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomeView />} />
        </Routes> 
      </Router>   
    </Provider>
  );
}

export default App;
