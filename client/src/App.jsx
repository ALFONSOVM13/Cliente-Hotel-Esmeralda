import "./App.css";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';

function App() {
  return (
       <Router>
        <Routes>
          <Route path='/' element={<HomeView />} />
        </Routes> 
      </Router>   
   );
}

export default App;
