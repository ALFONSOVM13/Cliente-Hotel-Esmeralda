import React, { useState } from 'react';
import axios from 'axios'; 

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

const SearchBar = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState('1'); // Valor predeterminado '1'
  const [availableRooms, setAvailableRooms] = useState([]);
  const [reservationStatus, setReservationStatus] = useState('');

  const handleSearch = async () => {
    try {
      const searchData = {
        checkInDate,
        checkOutDate,
        numberOfPeople
      };
      const response = await axios.get('/ruta-disponibilidad', {
        params: searchData
      });
      setAvailableRooms(response.data.rooms);
    } catch (error) {
      console.error('Error al enviar la solicitud de disponibilidad:', error);
      // Manejo de errores de red
    }
  };

  const handleReservation = async (roomId) => {
    try {
      const reservationData = {
        roomId,
        checkInDate,
        checkOutDate,
        numberOfPeople
      };
      const response = await axios.post('/ruta-reserva', reservationData);
      setReservationStatus(response.data.message);
      // Actualización de la lista de habitaciones disponibles después de la reserva exitosa
      setAvailableRooms(prevRooms => prevRooms.filter(room => room.id !== roomId));
    } catch (error) {
      console.error('Error al enviar la solicitud de reserva:', error);
      // Manejo de errores de red
    }
  };

  return (
    <div>
      <h2>Search for Rooms</h2>
      <div>
        <label>Check-in Date:</label>
        <DatePicker selected={checkInDate} onChange={date => setCheckInDate(date)} />
      </div>
      <div>
        <label>Check-out Date:</label>
        <DatePicker selected={checkOutDate} onChange={date => setCheckOutDate(date)} />
      </div>
      <div>
        <label>Number of People:</label>
        <Select
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },            
          ]}
          value={{ value: numberOfPeople, label: numberOfPeople }}
          onChange={option => setNumberOfPeople(option.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>

      {availableRooms.length > 0 && (
        <div>
          <h3>Available Rooms</h3>
          <ul>
            {availableRooms.map(room => (
              <li key={room.id}>
                {room.name} - Price: {room.price}
                <button onClick={() => handleReservation(room.id)}>Reserve</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {reservationStatus && <p>{reservationStatus}</p>}
    </div>
  );
};

export default SearchBar;
