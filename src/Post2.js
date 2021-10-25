import React from 'react';
import { Link } from 'react-router-dom';

const Post2 = ({ response }) => {
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={response?.image}
              class="img-fluid rounded-start"
              alt="foto"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" id="user">
                <img class="perfil" src={response?.owner.picture} />
                {response?.owner.firstName} {response?.owner.lastName}
              </h5>
              <br />
              <br />
              <div class="likes" id="body1">
                <ion-icon class="heart" name="heart"></ion-icon>{' '}
                {response?.likes} likes
              </div>
              <br />
              <br />

              <p class="card-text" id="desc">
                {' '}
                {response?.text}
              </p>
              <p class="card-text" id="desc">
                <a href={response?.link}>
                  <ion-icon name="logo-instagram"></ion-icon> ver en instagram
                </a>
              </p>
              <p class="card-text" id="muted">
                <small class="text-muted">{response?.publishDate}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post2;
