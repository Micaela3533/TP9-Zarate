import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from './Posts';

const ListadoPosts = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/post?limit=10`, {
        headers: { 'app-id': '6166bf8cae58e83f57bbc977' },
      })
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      });
  });

  return (
    <>
      <h1 class="titulo">p o s t s</h1>

      <nav>
        <Link class="icon1" to={'/'}>
          <ion-icon name="home"></ion-icon>Volver a Home
        </Link>
      </nav>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {response?.data.map((item) => {
          return <Post item={item} />;
        })}
      </div>
    </>
  );
};

export default ListadoPosts;
