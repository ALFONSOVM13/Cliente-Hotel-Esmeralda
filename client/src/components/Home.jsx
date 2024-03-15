import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { allRooms, filterRooms, orderRooms } from "../redux/rooms/actions/roomActions";
import { allFoods, filterFoods, orderFoods } from "../redux/foods/actions/foodActions";
import axios from "axios"

function Home() {
  const dispatch = useDispatch();
  const allRoomsData = useSelector(state => state.allRooms);
  const filteredRooms = useSelector(state => state.filteredRooms);
  const allFoodsData = useSelector(state => state.allFoods);
  const filteredFoods = useSelector(state => state.filteredFoods);
  const PageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('/API/foods/dbF.json');

        dispatch(allFoods(response.data)); // Envía los datos de los alimentos al store Redux
      } catch (error) {
        console.error('Error al obtener los alimentos:', error);
      }
    };
    fetchFoods(); // Llamo a la función de solicitud cuando el componente se monta
  
    // Limpia el estado de los platos cuando el componente se desmonta
    return () => {
        dispatch(allFoods([]));
      };
    }, [dispatch]);
  
    const handleCategoryChange = (event) => {
      const { value } = event.target;
      dispatch(filterFoods({ category: value }));
      setCurrentPage(1);
    };
    
    const handlePriceChange = (event) => {
      const { value } = event.target;
      dispatch(orderFoods({ type: 'price', order: value }));
    };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  //console.log(filteredFoods)
  const getCurrentPageNumber = () => {
    return currentPage;
  };
  const totalPages = filteredFoods ? Math.ceil(filteredFoods.length / PageSize) : 0;
  const startIndex = (currentPage - 1) * PageSize;
  const endIndex = filteredFoods ? Math.min(startIndex + PageSize, filteredFoods.length) : 0;
  const foodsForPage = filteredFoods ? filteredFoods.slice(startIndex, endIndex) : [];
 
  return (
    <div>
    <select name="byPrice" onChange={handlePriceChange}>
  <option value="">Price</option>
  <option value="A">Lowest Price</option>
  <option value="D">Highest Price</option>
</select>

<select name="byCategory" onChange={handleCategoryChange}>
  <option value="">Category</option>
  <option value="italian">Italian</option>
  <option value="japanese">Japanese</option>
  <option value="mexican">Mexican</option>
  <option value="drinks">Drinks</option>
  <option value="burgers">Burgers</option>
  <option value="snacks">Snacks</option>
  <option value="dessert">Dessert</option>
</select>
{filteredFoods ? (
      foodsForPage.map(food => (
        <div key={food.id}>
          <p>{food.name}</p>
          <p>{food.description}</p>
          <p>{food.price}</p>
          <p>{food.image}</p>
        </div>
      ))
    ) : (
      <p>Cargando platos...</p>
    )}
 <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
      <button>{getCurrentPageNumber()}</button>
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={!filteredFoods || endIndex >= filteredFoods.length}>Next</button>
         <div>
       </div>
    </div>
  );
}

export default Home;



