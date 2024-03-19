import React, { useState } from 'react';

const DetailModalRoom = ({ room }) => {
 const [currentImageIndex, setCurrentImageIndex] = useState(1); 

 const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 === room.images.length ? 1 : prevIndex + 1
    );
 };

 const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 < 1 ? room.images.length - 1 : prevIndex - 1
    );
 };

 return (
    <>
      <h2 className="text-white text-2xl font-bold">{room.name}</h2>
      <img className="object-cover w-16 h-16 rounded-t-lg md:h-auto md:w-16 md:rounded-none md:rounded-s-lg" src={room.images[0]} alt={room.name} />
      <div className="carousel w-full h-full flex items-center justify-center"> 
        <div id="slide1" className="carousel-item relative w-full h-full"> 
          <img src={room.images[currentImageIndex]} className="w-full h-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={handlePrevious} className="btn btn-circle">❮</button>
            <button onClick={handleNext} className="btn btn-circle">❯</button>
          </div>
        </div>
      </div>
      <p className='text-white'>{room.description}</p>
      <p className="text-white">Beds: {room.beds.join(', ')}</p>
      <p className="text-white">WiFi: {room.wifi ? 'Yes' : 'No'}</p>
      <p className='text-white'>{room.services}</p>
      <p className='text-white'>Price : USD{room.price}</p>

    </>
 );
};

export default DetailModalRoom;
