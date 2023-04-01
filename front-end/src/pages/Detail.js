import React from 'react';
import {useParams} from 'react-router-dom';

function Detail() {
    const params = useParams();

    return (
      <h1>Game {params.id} here</h1>
    );
  }
  
  export default Detail;
  