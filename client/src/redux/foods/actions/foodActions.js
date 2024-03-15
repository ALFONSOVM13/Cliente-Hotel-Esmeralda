import { FOODS, FILTER_FOODS, ORDER_FOODS } from "./types";
import axios from "axios";

 export const allFoods = () => async (dispatch) => {
    try {
      const response = await axios.get('/API/foods/dbF.json');
      return dispatch({
        type: FOODS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  export const filterFoods = (filter) => (dispatch) => {
    return dispatch({
      type: FILTER_FOODS,
      payload: filter
    });
  };
  export const orderFoods = (order) => (dispatch) => {
    return dispatch({
      type: ORDER_FOODS,
      payload: order
    });
  };