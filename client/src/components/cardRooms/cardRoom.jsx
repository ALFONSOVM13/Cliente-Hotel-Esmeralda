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
    <div className="pl-16 rounded-3xl shadow-sm bg-v max-md:pl-5 w-full  lg:w-8/12 ">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
        <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col mt-7 max-md:max-w-full">
            <div className="flex flex-col items-start pl-20 max-md:pl-5 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="mt-28 ml-24 text-4xl font-extrabold tracking-tight text-center text-white leading-[50.4px] max-md:mt-10 " >
                    {room.room_type.name}
                    </div>
                  </div>
                  <div className="ml-34 flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/663eae8fd7be6df68f6e25af7f35976248e4a857012e381fb6faa82ea9ca17d3?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                      className="ml-32 shrink-0 max-w-full aspect-square w-[198px] max-md:mt-5"
                      alt="Superior King"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-16 ml-24 text-base font-semibold text-white max-md:mt-10 max-md:ml-2.5">
                Sleeps {room.max_capacity} | 2 King 
              </div>
            </div>
            <div className="mt-11 text-2xl font-medium text-white max-md:mt-10 max-md:max-w-full">
            {room.description}
            </div>
            <button
              className=" justify-center items-center px-16 py-5 mt-9 text-base font-extrabold tracking-normal leading-6 text-white rounded-2xl border border-violet-100 border-solid hover:bg-slate-950 transition-colors max-md:px-5 max-md:max-w-full"
              onClick={() => setIsModalOpen(true)}
            >
              SEE MORE
            </button>
            <button
              className="justify-center items-center px-16 py-5 mt-6 text-base font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full"
              onClick={handleClick}
            >
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
 <img
    loading="lazy"
    src={room.photo_url}
    className="grow w-full shadow-sm aspect-[0.91] max-md:max-w-full rounded-r-3xl"
    alt="Room"
 />
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