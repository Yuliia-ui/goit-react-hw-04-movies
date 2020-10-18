import React from 'react';
import styles from '../MoviesReview/MoviesReview.module.css';

const DescMovie = ({ movie, handleGoBack }) => {
  const {
    title,
    poster_path,
    genres,
    vote_average,
    overview,
    release_date,
  } = movie;

  return (
    <div className={styles.descMovie}>
      <div>
        <button type="button" className={styles.btnBack} onClick={handleGoBack}>
          Back to list
        </button>
        <img className={styles.img} src={poster_path} alt={title} />
      </div>
      <div className={styles.wrapperDetails}>
        <h2 className={(styles.detailsTitle, styles.mainTitle)}>
          {title} ({release_date})
        </h2>
        <p>User Score: {vote_average * 10}%</p>

        <h2 className={styles.detailsTitle}>Overview</h2>
        <p>{overview}</p>
        <h2 className={styles.detailsTitle}>Genres</h2>

        {genres && (
          <ul className={styles.genresMovie}>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DescMovie;
