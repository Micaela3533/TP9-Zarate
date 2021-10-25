import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 class="titulo">Home</h1>
      <nav>
        <Link to={'/posts'}>
          <div class="d-grid gap-2" id="home">
            <button type="button" id="botonhome" class="btn btn-outline-danger">
              Mostrar Listado
            </button>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
