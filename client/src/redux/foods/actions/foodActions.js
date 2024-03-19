import axios from "axios";
import { FOODS, FILTER_FOODS, ORDER_FOODS } from "./types";

export const allFoods = () => async (dispatch) => {
 try {
    const response = await axios.get('https://backend-hotelesmeralda.onrender.com/api/dishes');
    console.log('Alimentos obtenidos:', response.data); // Agregar este console.log
    dispatch({
      type: FOODS,
      payload: response.data // Cambiar de response.data.menu a response.data
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
