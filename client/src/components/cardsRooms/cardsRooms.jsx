
import rooms from '../../../API/rooms/rooms';
import CardRoom from '../cardRooms/cardRoom';


const CardsRooms = () => {
 return (
  <div className="grid grid-cols-1 gap-8 justify-items-center">
  {rooms.map((room, index) => (
     <CardRoom key={index} room={room} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-[200%] md:h-[200%] lg:h-[200%] xl:h-[200%]" />
   ))}
 </div>
 
 
 );
};

export default CardsRooms;
