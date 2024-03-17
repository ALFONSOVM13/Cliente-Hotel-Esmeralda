import React, { useState } from 'react';
import axios from 'axios'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

const SearchBar = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState('1'); 
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
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Search for Rooms</h2>
      <div className="mb-4">
        <label className="block mb-1">Check-in Date:</label>
        <DatePicker
          className="w-full px-3 py-2 border rounded-lg"
          selected={checkInDate}
          onChange={date => setCheckInDate(date)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Check-out Date:</label>
        <DatePicker
          className="w-full px-3 py-2 border rounded-lg"
          selected={checkOutDate}
          onChange={date => setCheckOutDate(date)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Number of People:</label>
        <Select
          className="w-full px-3 py-2 border rounded-lg"
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
      <button
        className="block w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>

      {availableRooms.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Available Rooms</h3>
          <ul>
            {availableRooms.map(room => (
              <li key={room.id} className="mb-2">
                <span className="mr-2">{room.name} - Price: {room.price}</span>
                <button
                  className="px-3 py-1 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600"
                  onClick={() => handleReservation(room.id)}
                >
                  BOOK
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {reservationStatus && <p className="mt-4 text-green-600">{reservationStatus}</p>}
    </div>
  );
};

export default SearchBar;
