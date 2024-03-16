import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'; 
import foodsReducer from './foods/reducers/foodReducer';
import roomsReducer from './rooms/reducers/roomReducer';

import { thunk } from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    foods: foodsReducer,
    rooms: roomsReducer,
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
// store.subscribe(() => console.log('store :', store.getState()))
export default store;
