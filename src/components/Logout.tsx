import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log('Sesión cerrada');
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Cerrar Sesión</h2>
      <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Logout;