import React, { useState, useEffect } from 'react';
import CardRoom from '../cardRooms/cardRoom';

const CardsRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://backend-hotelesmeralda.onrender.com/api/rooms')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRooms(data);
        setLoading(false);
        console.log('Habitaciones obtenidas:', data);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 justify-items-center">
      {rooms.map((room, index) => (
        <CardRoom key={index} room={room} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-[200%] md:h-[200%] lg:h-[200%] xl:h-[200%]" />
      ))}
    </div>
  );
};

export default CardsRooms;
