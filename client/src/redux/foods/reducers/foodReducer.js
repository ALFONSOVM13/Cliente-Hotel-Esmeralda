import { FOODS, FILTER_FOODS, ORDER_FOODS } from "../actions/types";

const initialState = {
allFoods: [],
filteredFoods: [],
}
 
const rootReducer = (state = initialState, {type,payload}) => {
  //console.log(state.filteredFoods)
    switch (type) {
    case FOODS:
    return {
    ...state,
    allFoods: payload,
    filteredFoods: [...payload] 
  };
    case FILTER_FOODS:
    const {category, price} = payload
    
    if(!category && !price)  
    return {...state, filteredFoods: state.allFoods};
  
    if(category){ 
    const filterByCategory = state.allFoods.filter(food => 
      food.category === category
    );
   
    return {...state, filteredFoods: filterByCategory};  
   
    }
 
    if(price){
    const filterByPrice = state.allFoods.filter(food => 
      food.price <= price
    );
    return {...state, filteredFoods: filterByPrice};
    }
    case ORDER_FOODS:
      const { orderType, order } = payload;
      let sortedFoods = [...state.filteredFoods];

      if (orderType === "price") {
        sortedFoods.sort((a, b) => a.price - b.price);
        if (order === "D") {
          sortedFoods.reverse();
        }
      }

      return { ...state, filteredFoods: sortedFoods };

    default: 
    return state;
    }
  }

export default rootReducer;

