import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ced4c166bd9d448eb708ac1c947ec551';

export const getTrends = async () => {
  const response = await axios.get(
    `${MAIN_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const getDetails = async movieId => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};
export const getCredits = async movieId => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};
export const getReviews = async movieId => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  );
  return response.data;
};

export const getMovies = async searchData => {
  const response = await axios.get(
    `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${searchData}&include_adult=false`
  );
  return response.data;
};
