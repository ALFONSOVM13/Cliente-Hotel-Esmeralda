import React, { useState } from "react";
import { FaWifi, FaHotTub, FaTv, FaBeer, FaPhone } from "react-icons/fa";
import { TbAirConditioningDisabled } from "react-icons/tb";


const DetailModalRoom = ({ room }) => {
  const RoomDetailIcons = ({ hasFeature, icon }) => {
    return hasFeature ? <span className="mx-2 text-white">{icon}</span> : null;
  };
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
      <h2 className="text-white text-2xl font-bold">{room.room_type.name}</h2>
      <img
        className="object-cover w-16 h-16 rounded-t-lg md:h-auto md:w-16 md:rounded-none md:rounded-s-lg"
        src={room.photo_url}
        alt={room.room_type.name}
      />
      <div className="carousel w-auto h-96 flex items-center justify-center">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img src={room.photo_url} className="w-full h-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={handlePrevious}
              className="btn btn-circle text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="btn btn-circle text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
      <p className="text-white">{room.room_type.description}</p>
      <p className="text-white">
        Beds: {room.room_detail.single_bed} single bed,{" "}
        {room.room_detail.double_bed} double bed
      </p>
      <div className="flex space-x-2">
        <RoomDetailIcons
          hasFeature={room.room_detail.internet_connection}
          icon={<FaWifi />}
        />
        <RoomDetailIcons
          hasFeature={room.room_detail.air_conditioning}
          icon={<TbAirConditioningDisabled />}
        />
        <RoomDetailIcons
          hasFeature={room.room_detail.jacuzzi}
          icon={<FaHotTub />}
        />
        <RoomDetailIcons hasFeature={room.room_detail.tv} icon={<FaTv />} />
        <RoomDetailIcons
          hasFeature={room.room_detail.minibar}
          icon={<FaBeer />}
        />
        <RoomDetailIcons
          hasFeature={room.room_detail.phone}
          icon={<FaPhone />}
        />
      </div>

      <h2 className="text-white"> PRICE PER NIGHT {room.price_per_night} $</h2>
    </>
  );
};

export default DetailModalRoom;
