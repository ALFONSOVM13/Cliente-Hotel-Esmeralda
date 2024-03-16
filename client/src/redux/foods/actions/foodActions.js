import axios from "axios";
import { FOODS, FILTER_FOODS, ORDER_FOODS } from "./types";

export const allFoods = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/menu');
    dispatch({
      type: FOODS,
      payload: response.data.menu
    });
  } catch (error) {
    console.error('Error al obtener los alimentos:', error);
  }
};

export const filterFoods = (filter) => {
  return {
    type: FILTER_FOODS,
    payload: filter
  };
};

export const orderFoods = (order) => {
  return {
    type: ORDER_FOODS,
    payload: order
  };
};
