import React from 'react';
import styles from '../MoviesReview/MoviesReview.module.css';

const MovieReview = ({ details, onClick }) => (
    <div className={styles.descMovie}>
        <img className={styles.img} src={poster_path} alt={title} />
        <button type="button" className={styles.btnBack} onClick={handleGoBack}>
          Back to list
        </button>
      <div className={s.wrapperDetails}>
        <h2 className={(s.detailsTitle, s.mainTitle)}>
          {title} ({release_date})
        </h2>
        <p>User Score: {vote_average * 10}%</p>

        <h2 className={s.detailsTitle}>Overview</h2>
        <p>{overview}</p>
        <h2 className={s.detailsTitle}>Genres</h2>

        {genres && (
          <ul className={s.genresMovie}>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MovieReview;
