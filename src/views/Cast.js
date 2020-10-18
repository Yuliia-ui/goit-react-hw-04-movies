import React, { Component } from 'react';

import Loader from 'react-loader-spinner';
import moviesApi from '../services/movieApi';
import defaultAvatar from '../assets/mistake-3085712_640.jpg';

export default class Cast extends Component {
  state = {
    cast: [],
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoader: true });
    moviesApi
      .fetchCast(this.props.match.params.movieId)
      .then(cast => this.setState({ cast: defaultAvatar(cast) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  }

  render() {
    const { isLoader, cast, error } = this.state;

    return (
      <>
        {isLoader && (
          <div>
            <Loader type="Oval" color="#00BFFF" height={50} width={60} />
          </div>
        )}

        {cast && (
          <ul>
            {cast.map(({ id, name, profile_path, character }) => (
              <li key={id}>
                <img src={profile_path} alt="" width="92" />
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        )}

        {error && <p>Whoops, something went wrong: {error.message}</p>}
      </>
    );
  }
}
