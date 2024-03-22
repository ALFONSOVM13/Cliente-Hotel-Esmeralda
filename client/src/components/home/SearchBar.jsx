import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

const SearchBar = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfAdults, setNumberOfAdults] = useState(1); 
  const [numberOfChildren, setNumberOfChildren] = useState(0); 
  const [availableRooms, setAvailableRooms] = useState([]);
  const [reservationStatus, setReservationStatus] = useState('');
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 

  useEffect(() => {
    let updatedCategoryOptions = [];
  
    if (numberOfAdults <= 2 && numberOfChildren === 0) {
      updatedCategoryOptions = [
        { value: 'standartking', label: 'Standart King' },
        { value: 'superiorking', label: 'Superior King' },
        { value: 'juniorking', label: 'Junior King' },
        { value: 'presidentialsuite', label: 'Presidential Suite' },
        { value: 'all', label: 'All Categories' }
      ];
    } else if (numberOfAdults <= 2 && numberOfChildren > 0) {
      updatedCategoryOptions = [
        { value: 'superiorking', label: 'Superior King' },
        { value: 'presidentialsuite', label: 'Presidential Suite' },
        { value: 'all', label: 'All Categories' }
      ];
    }

    setCategoryOptions(updatedCategoryOptions);
  }, [numberOfAdults, numberOfChildren]);
  
  const handleSearch = async () => {
    try {
      let categoryValue = null;
      if (selectedCategory && selectedCategory.value !== 'all') {
        categoryValue = selectedCategory.value;
      }

      const numberOfPeople = numberOfAdults + numberOfChildren;

      const searchData = {
        checkInDate,
        checkOutDate,
        numberOfPeople,
        category: categoryValue
      };
      
      const response = await axios.get('/ruta-disponibilidad', {
        params: searchData
      });
      setAvailableRooms(response.data.rooms);
    } catch (error) {
      console.error("Error al enviar la solicitud de disponibilidad:", error);
    }
  };

  const handleReservation = async (roomId) => {
    try {
      const reservationData = {
        roomId,
        checkInDate,
        checkOutDate,
        numberOfPeople: numberOfAdults + numberOfChildren
      };
      const response = await axios.post("/ruta-reserva", reservationData);
      setReservationStatus(response.data.message);
      setAvailableRooms((prevRooms) =>
        prevRooms.filter((room) => room.id !== roomId)
      );
    } catch (error) {
      console.error('Error al enviar la solicitud de reserva:', error);
    }
  };

  const handleAdultsChange = (value) => {
    const adults = Number(value);
    const maxAdults = 4; 
    const maxChildren = 4 - adults; 
  
    if (adults <= maxAdults) {
      setNumberOfAdults(adults);
    } else {
      setNumberOfAdults(maxAdults);
    }
  
    if (numberOfChildren > maxChildren) {
      setNumberOfChildren(maxChildren);
    }
  };
  
  const handleChildrenChange = (value) => {
    const children = Number(value);
    const maxChildren = 4 - numberOfAdults; 
  
    if (numberOfAdults + children <= 4) {
      setNumberOfChildren(children);
    } else {
      const remainingChildren = 4 - numberOfAdults;
      setNumberOfChildren(remainingChildren);
    }
  };

  return (
    <div className="mt-8 w-4/6 md:w-2/3 lg:w-1/2 mx-auto p-4 bg-v rounded-lg shadow-md flex flex-wrap">
      <div className="w-full md:w-auto md:flex-1 md:mr-2 mb-4 md:mb-0 mr-1 ml-2">
        <label className="block mb-1 text-white ">CHECK-IN</label>
        <DatePicker
          className="w-full px-3 py-2 border rounded-lg bg-v text-white text-center"
          selected={checkInDate}
          onChange={date => setCheckInDate(date)}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy" 
        />
      </div>
      <div className="w-full md:w-auto md:flex-1 md:mr-2 mb-4 md:mb-0 mr-1 ml-1">
        <label className="block mb-1 text-white text-center">CHECK-OUT</label>
        <DatePicker
          className="w-full px-3 py-2 border rounded-lg bg-v text-white text-center"
          selected={checkOutDate}
          onChange={date => setCheckOutDate(date)}
          minDate={checkInDate ? new Date(checkInDate.getTime() + 86400000) : new Date()} 
          dateFormat="dd/MM/yyyy" 
        />
      </div>
      <div className="w-full md:w-auto md:flex-1 md:mr-2 mb-4 md:mb-0 mr-1 ml-1" >
        <label className="block mb-1 text-white text-center">ADULTS</label>
        <Select
          className="w-full px-3 py-2 border rounded-lg bg-v text-black"
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
          ]}
          value={{ value: numberOfAdults.toString(), label: numberOfAdults.toString() }}
          onChange={option => handleAdultsChange(option.value)}
        />
      </div>
      <div className="w-full md:w-auto md:flex-1 md:mr-2 mb-4 md:mb-0 mr-1 ml-1" >
        <label className="block mb-1 text-white text-center">CHILDREN</label>
        <Select
          className="w-full px-3 py-2 border rounded-lg bg-v text-black"
          options={[
            { value: '0', label: '0' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },            
          ]}
          value={{ value: numberOfChildren.toString(), label: numberOfChildren.toString() }}
          onChange={option => handleChildrenChange(option.value)}
        />
      </div>
      <div className="w-full md:w-auto md:mr-2 mb-4 md:mb-0 ml-1 mr-1">
        <label className="block mb-1 text-white text-center">CATEGORY</label>
        <Select
          className="w-full px-3 py-2 border rounded-lg bg-v text-black" 
          options={categoryOptions}
          value={selectedCategory}
          onChange={option => setSelectedCategory(option)}
          placeholder="Select Category" 
        />
      </div>
      <div className="w-full md:w-auto mt-4 md:mt-0">
        <button
          className="w-full px-4 py-2 mt-9 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 ml-1 mr-5"
          onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>

      {availableRooms.length > 0 && (
  <div className="w-full mt-4">
    <h3 className="text-lg font-semibold mb-2 text-white">AVAILABLE ROOMS</h3>
    <ul>
      {availableRooms.map(room => (
        <li key={room.id} className="mb-4">
          <div className="flex items-center">
            <img src={room.imageUrl} alt={room.name} className="mr-4 w-24 h-auto" />
            <div>
              <p className="text-white font-semibold mb-1">{room.name}</p>
              {/* En lo que sigue mostramos el precio calculado por el back que al precio base lo reduce dependiendo 
              de la relación numero de personas-categoría */}
              <p className="text-white">{room.calculatedPrice}</p> {/* Mostrar el precio recalculado */}
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
      {reservationStatus && <p className="mt-4 text-black 0">{reservationStatus}</p>}
    </div>
  );
};

export default SearchBar;