import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const availableRooms = location.state?.availableRooms || [];

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Resultados de búsqueda
        </h2>
        {availableRooms.length === 0 ? (
          <div className="text-lg text-gray-600">
            No se encontraron habitaciones disponibles.
          </div>
        ) : (
          availableRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-md p-6 mb-4 flex"
            >
              <div className="w-1/2">
                <img
                  src={room.photo_url}
                  alt={`Habitación ${room.room_number}`}
                  className="w-full h-auto rounded-md mb-2"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {room.room_type.name}
                </h2>
                <p className="text-gray-700">
                  {room.room_type.description}
                </p>
                <p className="text-gray-700">
                  Precio por noche: ${room.price_per_night}
                </p>
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => handleRoomClick(room)}
                  >
                    Ver detalles
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 mt-4">
                    Reservar
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2 mt-4">
                    Price per night: ${room.price_per_night}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        {selectedRoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            <div className="bg-white rounded-lg p-8 max-w-md z-50">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {selectedRoom.room_type.name}
              </h2>
              <p className="text-gray-700">
                {selectedRoom.room_type.description}
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Camas simples: {selectedRoom.room_detail.single_bed}</li>
                <li>Camas dobles: {selectedRoom.room_detail.double_bed}</li>
                <li>
                  Aire acondicionado:{" "}
                  {selectedRoom.room_detail.air_conditioning ? "Sí" : "No"}
                </li>
                <li>
                  Jacuzzi: {selectedRoom.room_detail.jacuzzi ? "Sí" : "No"}
                </li>
                <li>
                  Conexión a internet:{" "}
                  {selectedRoom.room_detail.internet_connection ? "Sí" : "No"}
                </li>
                <li>TV: {selectedRoom.room_detail.tv ? "Sí" : "No"}</li>
                <li>
                  Minibar: {selectedRoom.room_detail.minibar ? "Sí" : "No"}
                </li>
                <li>
                  Teléfono: {selectedRoom.room_detail.phone ? "Sí" : "No"}
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Precio por noche: ${selectedRoom.price_per_night}
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
