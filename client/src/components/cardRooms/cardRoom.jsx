import { useState } from 'react';

import { useNavigate } from "react-router-dom";
import DetailModalRoom from '../detail/DetailModalRoom';
import Modal from '../modal/modal';



function CardRoom({ room }) {
    const navigate = useNavigate()
   
 const [isModalOpen, setIsModalOpen] = useState(false); 

 const handleClick = () => {
    navigate('/formulario');
  };

 return (
<div className="flex items-center  rounded-lg shadow   bg-v ">
 <img className="object-cover w-full rounded-t-lg h-128 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={room.photo_url} alt={room.name} />
 {/* <img className="object-cover w-full rounded-t-lg h-128 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={room.images[1]} alt={room.name} /> */}
 <div className="flex flex-col justify-between p-4 leading-normal">
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-b dark:text-white">{room.name}</h5>
     <p className="mb-3 font-normal text-b dark:text-b ">{room.description}</p>
     <div className="flex justify-between"> 
       <button onClick={() => setIsModalOpen(true)} className="flex justify-center items-center px-4 py-2 text-base tracking-normal leading-6 text-white hover:bg-slate-950 transition-colors rounded-2xl border border-violet-100 border-solid max-w-[364px]">
          See More        
       </button>
       <button onClick={handleClick} className="flex justify-center items-center px-4 py-2 text-base font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-w-[364px]">
         Book Now
       </button>
     </div>
 </div>
 <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
     <DetailModalRoom room={room} />
 </Modal>

</div>


 
 );
}

export default CardRoom;



{/* <article className="flex flex-col justify-center items-start px-16 text-white rounded-3xl shadow-sm bg-green-950 max-md:pl-5">
        
<Link to={`/detail/${room.id}`}>
  <h2 className="relative mt-44 text-4xl font-extrabold tracking-tight text-center  max-md:mt-10">{room.name}</h2>
</Link>
<p className="text-white">{room.description}</p>
<div className="flex mt-4">
  {room.images.map((image, index) => (
    <img key={index} src={image} alt={room.title} className="w-1/3" />
  ))}
</div>
</article> */}