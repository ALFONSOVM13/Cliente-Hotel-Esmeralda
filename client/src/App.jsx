import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeView from './views/HomeView';
import Navbar from './components/navbar/Navbar';
import LandingView from "./views/LandingView";
import DetailView from "./views/DetailView";
import Rooms from "./views/RoomsView";
import Restaurant from "./views/Restaurant";
import LoginView from "./views/LoginView";
import TermsAndConditionsView from "./views/TermsAndConditions";

// Componente MainLayout
function MainLayout() {
 const location = useLocation();
 const showNavbar = location.pathname !== '/login';

 return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/landing' element={<LandingView />} />
        <Route path="/detail/:id" element={<DetailView />} />
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/restaurant" element={<Restaurant/>}/>
        <Route path="/login" element={<LoginView/>}/>
        <Route path="/termsAndConditions" element={<TermsAndConditionsView/>}/>
      </Routes>
    </>
 );
}

function App() {
 return (
    <Router>
      <MainLayout />
    </Router>
 );
}

export default App;