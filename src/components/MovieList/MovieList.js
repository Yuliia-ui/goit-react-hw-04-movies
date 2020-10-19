import React from 'react';
import { Link } from 'react-router-dom';
import defaultPicture from '../../assets/zoo-2257949_1920.png';
import styles from '../MovieList/MovieList.module.css';

export default function MovieList({ movie, match, location }) {
  return (
    <ul className={styles.ulList}>
      {movie.map(({ id, poster_path, title }) => (
        <li key={id} className={styles.filmItem}>
          <Link
            className={styles.link}
            to={{
              pathname: `${match}/${id}`,
              state: { from: location },
            }}
          >
            <img src={poster_path ? poster_path : defaultPicture} alt={title} />
            <p className={styles.nameFilm}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
