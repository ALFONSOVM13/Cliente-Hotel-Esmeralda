
import rooms from '../../../API/rooms/rooms';
import CardRoom from '../cardRooms/cardRoom';


const CardsRooms = () => {
 return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {rooms.map((room, index) => (
        <CardRoom key={index} room={room} />
      ))}
    </div>
 );
};

export default CardsRooms;
