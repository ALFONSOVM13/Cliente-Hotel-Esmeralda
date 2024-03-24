import React, { useState, useContext, useEffect} from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import FormBook from '../forms/FormBook';
import { RoomContext } from '../../../context/RoomContext'; 

const SearchBar = () => {

  const { availableRooms, setAvailableRooms } = useContext(RoomContext); 

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numberOfAdults, setNumberOfAdults] = useState(1); 
  const [numberOfChildren, setNumberOfChildren] = useState(0); 
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [searchData, setSearchData] = useState(null);

  const navigate = useNavigate(); 

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
    return `${year}-${month}-${day}`;
  };
  
  useEffect(() => {
    console.log('availableRooms actualizado:', availableRooms);
  }, [availableRooms]);
    
  const handleSearch = async () => {
    try {
      const capacity = numberOfAdults + numberOfChildren; 
      const formattedCheckInDate = checkInDate ? formatDate(checkInDate) : null;
      const formattedCheckOutDate = checkOutDate ? formatDate(checkOutDate) : null;
      
      const searchData = {
        from: formattedCheckInDate, 
        to: formattedCheckOutDate, 
        capacity 
      };
  
      const response = await axios.post('http://localhost:4000/api/rooms/available', searchData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      setAvailableRooms(response.data.rooms);
     
      console.log(response.data.rooms)
      setSearchData({ checkInDate, checkOutDate, numberOfAdults, numberOfChildren });
      setSearchCompleted(true);
      
      navigate('/formbook', {state: {availableRooms: response.data.rooms}});
    } catch (error) {
      console.error("Error al enviar la solicitud de disponibilidad:", error);
      
      alert("Lo sentimos, no hay habitaciones disponibles en esas fechas.");
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
    <div className="mt-8 w-2/3 md:w-2/3 lg:w-1/2 mx-auto p-4 bg-v rounded-lg shadow-md flex flex-wrap">
      <div className="w-full md:w-1/4 md:flex-1 md:mr-2 mb-4 md:mb-0 mr-1 ml-2">
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
      <div className="w-full md:w-1/4 md:flex-1 md:mr-2 mb-4 md:mb-0 mr-1 ml-1" >
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
      <div className="w-full md:w-1/4 md:flex-1 md:mr-2 mb-4 md:mb-0 mr-1 ml-1" >
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
      <div className="w-full md:w-auto mt-4 md:mt-0">
        <button
          className="w-full px-4 py-2 mt-9 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 ml-1 mr-5"
          onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>
   
  {searchCompleted && (
    <FormBook availableRooms={availableRooms} searchData={searchData} />
  )}
  </div>
);
};
export default SearchBar;