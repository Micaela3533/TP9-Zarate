import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ item }) => {
  return (
    <>
      <Link to={'/posts/' + item.id}>
        <div class="col">
          <div class="card" id="postt">
            <img src={item.image} class="card-img-top" alt="..." />
            <div class="card-body" id="body1">
              <img class="perfil" src={item.owner.picture} />

              <h5 class="card-title">
                {item.owner.firstName} {item.owner.lastName}
              </h5>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Posts;
