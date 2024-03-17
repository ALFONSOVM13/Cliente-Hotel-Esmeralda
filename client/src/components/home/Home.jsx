import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allFoods,
  filterFoods,
  orderFoods,
} from "../../redux/foods/actions/foodActions";
import SearchBar from "./SearchBar";

function Home() {
  const dispatch = useDispatch();
  const allFoodsData = useSelector((state) => state.foods.foodsAll);
  const filteredFoods = useSelector((state) => state.foods.filteredFoods);
 
  const PageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(allFoods());
  }, [dispatch]);


  const handleCategoryChange = (event) => {
    const { value } = event.target;
    dispatch(filterFoods({ category: value }));
    setCurrentPage(1);
  };

  const handleCategoryClick = (category) => {
    dispatch(filterFoods({ category }));
    setCurrentPage(1);
  };

  const handlePriceChange = (event) => {
    const { value } = event.target;
    dispatch(orderFoods({ type: "price", order: value }));
  };

   const handlePageChange = (page) => {
    setCurrentPage(Math.max(1, page));
  };

  const getCurrentPageNumber = () => {
    return currentPage;
  };

  const totalPages = filteredFoods
    ? Math.ceil(filteredFoods.length / PageSize)
    : 0;
  const startIndex = (currentPage - 1) * PageSize;
  const endIndex = filteredFoods
    ? Math.min(startIndex + PageSize, filteredFoods.length)
    : 0;
  const foodsForPage = filteredFoods
    ? filteredFoods.slice(startIndex, endIndex)
    : [];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <SearchBar />
      <h1 class="font-font1 text-verde">PROBAR FUENTE</h1>
      <div className="flex justify-between mt-4 mb-2">
        <div>
          <label className="block mb-1">Price:</label>
          <select
            name="byPrice"
            className="border rounded-md px-3 py-2"
            onChange={handlePriceChange}
          >
            <option value="">Price</option>
            <option value="A">Lowest Price</option>
            <option value="D">Highest Price</option>
          </select>
        </div>

    
      <div>
          <label className="block mb-1">Category:</label>
          <div className="flex flex-wrap">
            {["Italian", "Japanese", "Mexican", "Drinks", "Burgers", "Snacks", "Dessert"].map(category => (
              <button key={category} onClick={() => handleCategoryClick(category)} className="border rounded-md px-3 py-2 mr-2 mb-2 bg-blue-500 text-white hover:bg-blue-600">{category}</button>              
            ))}
          </div>
        </div>
      </div>
      {filteredFoods ? (
        foodsForPage.map((food) => (
          <div key={food.id} className="border rounded-md p-4 mb-4">
            <p className="font-semibold">{food.name}</p>
            <p>{food.description}</p>
            <p>Price: {food.price}</p>
            <img
              src={food.image}
              alt={food.name}
              className="mt-2 h-25 w-full object-cover"
            />
          </div>
        ))
      ) : (
        <p>Loading dishes...</p>
      )}
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button disabled={!filteredFoods || currentPage > totalPages}>
          {getCurrentPageNumber()}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!filteredFoods || endIndex >= filteredFoods.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
