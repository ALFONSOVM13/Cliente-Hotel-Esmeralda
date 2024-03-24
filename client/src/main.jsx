import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import { RoomProvider } from '../context/RoomContext.jsx'; 
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RoomProvider> 
        <App />
      </RoomProvider>
    </Provider>
  </React.StrictMode>
);
