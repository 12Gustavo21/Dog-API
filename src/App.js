import React, { useState } from 'react';
import axios from 'axios';
import { Globalstyle } from './Global/style';
import * as S from './style';

export default function App() {

  const [dog, setDog] = useState();
  const [status, setStatus] = useState(false);

  function getDog() {
    axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
      setDog(response.data.message);
      setStatus(true);
    })
  }

  return (
    <S.Main>
      <Globalstyle />
      <h1>Puppies API</h1>
      {status && <img src={dog} alt='a cute dog' />}
      <button onClick={() => { getDog() }} >Have fun</button>
    </S.Main>
  )
}
