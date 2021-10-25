import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post2 from './Post2';

const DetallePosts = () => {
  const { id } = useParams();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/post/` + id, {
        headers: { 'app-id': '6166bf8cae58e83f57bbc977' },
      })
      .then((res) => {
        setResponse(res.data);

        console.log(res.data);
      });
  });

  return (
    <>
      <nav>
        <Link class="icon1" to={'/'}>
          <ion-icon name="home"></ion-icon>Volver a Home
        </Link>
      </nav>
      


      <Post2 response={response}></Post2>
    </>
  );
};

export default DetallePosts;
