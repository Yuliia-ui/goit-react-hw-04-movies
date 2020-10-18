import React from 'react';
import MovieItem from './MovieItem/MovieItem';
import styles from './MovieItem/MovieItem.module.css';

const MovieList = ({ movie, ...props }) => (
  <ul className={styles.MovieList}>
    {movie.map(({ id, ...movieProps }) => (
      <MovieItem key={id} id={id} {...movieProps} {...props} />
    ))}
  </ul>
);

export default MovieList;
