import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'; // Importa thunk correctamente

import foodsReducer from './foods/reducers/foodReducer';
import roomsReducer from './rooms/reducers/roomReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  foods: foodsReducer,
  rooms: roomsReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Coloca la impresión del estado después de que se haya realizado la carga de la tienda
store.subscribe(() => console.log('Store:', store.getState()));

export default store;
