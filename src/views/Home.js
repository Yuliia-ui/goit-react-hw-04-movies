import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import MovieApi from '../services/movieApi';
import MovieList from '../components/MovieList/MovieList';

export default class HomePage extends Component {
  state = {
    movies: [],
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.handleApiFetcher();
  }

  handleApiFetcher = query => {
    MovieApi.fetchMovieDetails()
      .then(response =>
        this.setState({
          movies: response.results,
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies, isLoader, error } = this.state;

    return (
      <>
        <div>
          <h1 className="MoviesTitle">Trending today</h1>
          {isLoader && (
            <div>
              <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
            </div>
          )}
          {error && <p>Oops, something went wrong: {error.message}</p>}

          {movies && <MovieList movies={movies} {...this.props} />}

          <ul className="MovieList">
            {movies.map(movie => (
              <MovieList key={movie.id} movie={movie} match={'/movies'} />
            ))}
          </ul>

          {movies.length > 0 && !isLoader && (
            <button
              className="showMore"
              onClick={() => this.handleSearchFetcher}
            >
              <span className="buttonTitle">SHOW MORE</span>
            </button>
          )}
        </div>
      </>
    );
  }
}
