import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = 'a874a20001c1a2b686b34f1eba843c8d';

const fetchMovieDetails = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${apiKey}`);
  return data;
};

const fetchMoviesSearch = async (query, page = 1) => {
  const { data } = await axios.get(
    `search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`,
  );
  return data;
};

const fetchMoviesReviews = async movieID => {
  const { data } = await axios.get(
    `movie/${movieID}/reviews?api_key=${apiKey}&language=en-US&page=1`,
  );
  return data;
};

const fetchMoviesDetails = async movieID => {
  const { data } = await axios.get(
    `movie/${movieID}?api_key=${apiKey}&language=en-US`,
  );
  return data;
};

const fetchMoviesCast = async movieID => {
  const { data } = await axios.get(
    `movie/${movieID}/credits?api_key=${apiKey}`,
  );
  return data;
};

export default {
  fetchMovieDetails,
  fetchMoviesSearch,
  fetchMoviesDetails,
  fetchMoviesCast,
  fetchMoviesReviews,
};
