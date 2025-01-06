import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bem-vindo à Página Inicial!</h1>
      <p>Este é o componente Home.</p>
      <Link to= "/login">Clique aqui.</Link>
    </div>
  );
}

export default Home;
