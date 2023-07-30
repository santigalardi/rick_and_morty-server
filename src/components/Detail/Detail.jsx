import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <div className={styles.imgContainer}>
          <img src={character?.image} alt={character?.name} />
        </div>
        <div className={styles.detailsContainer}>
          <h1>{character?.name}</h1>
          <p>Status: {character?.status}</p>
          <p>Species: {character?.species}</p>
          <p>Gender: {character?.gender}</p>
          <p>Origin: {character?.origin?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
