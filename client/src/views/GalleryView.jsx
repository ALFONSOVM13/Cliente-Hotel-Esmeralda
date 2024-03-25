import React, { useState } from 'react';
import Gallery from '../components/gallery/Gallery';

const GalleryView = () => {
  const [filter, setFilter] = useState("ALL");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
  <div
  className="bg-cover bg-no-repeat"
  style={{ 
    backgroundImage: `url('https://media.staticontent.com/media/pictures/a3b9d170-fdae-48b2-92cf-330370662c1a')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    height: 'calc(36vh - 0px)',
    marginTop: '0px',
    width: '100%', 
  }}
>
<div className="absolute left-20 top-12 text-white px-4 py-2 text-justify">
  <h1 className="text-6xl font-bold mb-4">Gallery</h1>
  <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-normal md:leading-relaxed lg:leading-normal xl:leading-relaxed">
    See the image gallery of the Hotel <br/> Esmeralda Resort & Spa and <br/> discover why we are 
    one of the <br/> best hotels in Buenos Aires for <br/> business and leisure stays
  </p>
</div>

        <div className="flex flex-col items-center mt-96">
          <div className="bg-v text-white py-4 flex justify-center items-center w-1/5 rounded-md">
            <button onClick={() => handleFilterChange("ALL")} className="mr-4 px-4 py-2 bg-transparent  hover:text-yellow-500 border-transparent rounded-md text-xl">ALL</button>
            <button onClick={() => handleFilterChange("ROOMS")} className="mr-4 px-4 py-2 bg-transparent hover:text-yellow-500 border-transparent rounded-md text-xl">ROOMS</button>
            <button onClick={() => handleFilterChange("HOTEL")} className="mr-4 px-4 py-2 bg-transparent hover:text-yellow-500 border-transparent rounded-md text-xl">HOTEL</button>
            <button onClick={() => handleFilterChange("EVENTS")} className="px-4 py-2 bg-transparent hover:text-yellow-500 border-transparent rounded-md text-xl">EVENT</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-8 sm:py-10 lg:py-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-2"></h2>
        <Gallery filter={filter} />
      </div>
    </div>
  );
};

export default GalleryView;