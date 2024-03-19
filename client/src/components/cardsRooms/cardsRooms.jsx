import React, { useState, useEffect } from 'react';
import CardRoom from '../cardRooms/cardRoom';

const CardsRooms = () => {
 const [rooms, setRooms] = useState([]);

 useEffect(() => {
    fetch('http://localhost:3002/api/rooms')
      .then(response => response.json())
      .then(data => setRooms(data));
 }, []);

 return (
    <div className="grid grid-cols-1 gap-8 justify-items-center">
      {rooms.map((room, index) => (
        <CardRoom key={index} room={room} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-[200%] md:h-[200%] lg:h-[200%] xl:h-[200%]" />
      ))}
    </div>
 );
};

export default CardsRooms;
