import React from 'react';
import MovieItem from './MovieItem/MovieItem';
import styles from './MoviesItem/MoviesItem.module.css';

const MoviesList = ({ movies, ...props }) => (
  <ul className={styles.MoviesList}>
    {movies.map(({ id, ...moviesProps }) => (
      <MovieItem key={id} id={id} {...moviesProps} {...props} />
    ))}
  </ul>
);

export default MoviesList;
