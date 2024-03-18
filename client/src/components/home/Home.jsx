import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allFoods,
  filterFoods,
  orderFoods,
} from "../../redux/foods/actions/foodActions";
import SearchBar from "./SearchBar";
import LandingPages from "../landing/LandingPage";

function Home() {
  const dispatch = useDispatch();
  const allFoodsData = useSelector((state) => state.foods.foodsAll);
  const filteredFoods = useSelector((state) => state.foods.filteredFoods);

  const PageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(true);



  return (
    <>
      <LandingPages showModal={showModal} setShowModal={setShowModal} />

        <SearchBar />




      
    </>
  );
}

export default Home;
