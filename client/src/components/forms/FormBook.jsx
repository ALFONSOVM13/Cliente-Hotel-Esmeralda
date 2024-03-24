import React, { useState } from 'react';
import axios from 'axios'; 
import { useLocation } from 'react-router-dom'

const FormBook = () => {
  const location = useLocation()
  const availableRooms = location.state.availableRooms
  const [reservationStatus, setReservationStatus] = useState('');

  const handleReservation = async (roomId) => {
    try {
      const reservationData = {
        // Aquí deberías proporcionar los valores correctos para user_id, formattedCheckInDate y formattedCheckOutDate
        user_id: 'user_id',
        formattedCheckInDate: 'formattedCheckInDate',
        formattedCheckOutDate: 'formattedCheckOutDate',
        room_id: roomId
      };

            const response = await axios.post("http://localhost:4000/api/reservations", reservationData);
            setReservationStatus(response.data.message);
      
            // Eliminar la habitación reservada de la lista de habitaciones disponibles
            setAvailableRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
          } catch (error) {
            console.error('Error al enviar la solicitud de reserva:', error);
          }
        };
        console.log(availableRooms)
        return (
          <div>
            <h2>Available Rooms</h2>
            {availableRooms && (
              <div className="w-full mt-4">
                <h3 className="text-lg font-semibold mb-2 text-white">AVAILABLE ROOMS</h3>
                <ul>
                  {availableRooms.map(room => (
                    <li key={room.id} className="mb-4">
                      <div className="flex items-center">
                        <img src={room.photo_url} alt={room.photo} className="mr-4 w-24 h-auto" />
                        <div>
                          <p className="text-white font-semibold mb-1">max: {room.max_capacity} p</p>
                          <p className="text-white">U$ {room.price_per_night}</p>
                        </div>
                      </div>
                      <button
                        className="px-3 py-1 mt-2 text-sm text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
                        onClick={() => handleReservation(room.id)}
                      >
                        BOOK
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {reservationStatus && <p className="mt-4 text-black">{reservationStatus}</p>}
          </div>
        );
      };
      
      export default FormBook;