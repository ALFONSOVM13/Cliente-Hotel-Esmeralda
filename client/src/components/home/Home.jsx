import React, { useState } from "react";


import SearchBar from "./SearchBar";
import LandingPages from "../landing/LandingPage";

function Home() {

  const [showModal, setShowModal] = useState(true);



  return (
    <>
      <LandingPages showModal={showModal} setShowModal={setShowModal} />

        <SearchBar />




      
    </>
  );
}

export default Home;
