import React from 'react';

import { FiArrowLeft } from 'react-icons/fi'; // Importa el ícono de flecha de react-icons
import { useNavigate } from 'react-router-dom';

const BackToHomeButton = () => {
 const navigate = useNavigate();

 const goToHome = () => {
    navigate('/'); // Redirige al usuario a la página de inicio
 };

 return (
    <button
      onClick={goToHome}
      className="flex items-center gap-2 px-4 py-2 text-v font-bold bg-d rounded-2xl hover:bg-amber-400 transition-colors"
    >
      <FiArrowLeft size={20} /> Volver al Home
    </button>
 );
};

export default BackToHomeButton;
