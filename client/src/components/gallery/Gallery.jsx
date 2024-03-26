import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import dataRooms from '../../../data/dataRooms';
import dataHotel from '../../../data/dataHotel';
import dataEvents from '../../../data/dataEvents';

const Gallery = ({ filter }) => {
  const itemsPerPage = 4; 
  const [currentPage, setCurrentPage] = useState(1);

  let allData = [];

  switch (filter) {
    case 'ROOMS':
      allData = dataRooms;
      break;
    case 'HOTEL':
      allData = dataHotel;
      break;
    case 'EVENTS':
      allData = dataEvents;
      break;
    default:
      allData = [...dataRooms, ...dataHotel, ...dataEvents];
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData = allData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <div>
      <div className="min-h-[500px]">
      <div className="grid grid-cols-2 gap-4 mt-5">
        {currentPageData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.Url} alt={item.name} style={{ width: '1000px', height: '600px', marginLeft: '50px' }} className="object-cover mb-2" />
            <p className="text-center text-3xl">{item.name}</p>
            <p className="text-center text-xl">{item.description}</p>
            <p className="text-center text-xl">{item.date}</p>
          </div>
        ))}
      </div>
      </div>
      <div className="flex justify-end items-center mt-4">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="bg-v hover:text-yellow-500 text-white font-bold py-2 px-4 rounded-l">
          <FontAwesomeIcon icon={faChevronLeft} className="text-2xl mr-2" />
          Prev
        </button>
        <div className="text-xl mx-4">
          Page {currentPage}
        </div>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={endIndex >= allData.length} className="bg-v hover:text-yellow-500 text-white font-bold py-2 px-4 rounded-r">
          Next
          <FontAwesomeIcon icon={faChevronRight} className="text-2xl ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;