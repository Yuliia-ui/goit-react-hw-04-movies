import React, { Component, Suspense, lazy } from 'react';
import { Route, NavLink } from 'react-router-dom';

import moviesApi from '../services/movieApi';
import Loader from 'react-loader-spinner';
import routes from '../routes';
import MoviePage from '../views/MoviePage';
import defaultAvatar from '../assets/zoo-2257949_1920.png';

const AsyncCast = lazy(() =>
  import('./Cast' /* webpackChunkName: "async-cast-component" */),
);

const AsyncReviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "async-reviews-component" */),
);

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    isLoader: false,
    error: null,
    location: this.props.location.state.from,
  };

  componentDidMount() {
    this.setState({ isLoader: true });
    moviesApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then(movie => this.setState({ movie: defaultAvatar(movie) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  }

  handleGoToList = () => {
    return this.props.history.push(this.state.location);
  };

  render() {
    const { isLoader, movie, error } = this.state;
    const { match } = this.props;
    return (
      <>
        {isLoader && (
          <div>
            <Loader type="Oval" color="#00BFFF" height={70} width={100} />
          </div>
        )}

        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {movie && (
          <>
            <MoviePage movie={movie} handleGoBack={this.handleGoToList} />
            <hr />
            <NavLink
              to={{
                pathname: `${match.url}${routes.Reviews}`,
                state: { from: this.props.location },
              }}
            >
              Reviews
            </NavLink>

            <NavLink
              to={{
                pathname: `${match.url}${routes.Cast}`,
                state: { from: this.props.location },
              }}
            >
              Cast
            </NavLink>

            <Suspense
              fallback={
                <div>
                  <Loader type="Oval" color="#00BFFF" height={70} width={100} />
                </div>
              }
            >
              <Route
                path={`${match.path}${routes.Reviews}`}
                component={AsyncReviews}
              />
              <Route
                path={`${match.path}${routes.Cast}`}
                component={AsyncCast}
              />
            </Suspense>
          </>
        )}
      </>
    );
  }
}
