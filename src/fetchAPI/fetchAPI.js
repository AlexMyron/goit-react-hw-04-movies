const API_KEY = "2c8f20f71f9218bd28bf5b23dd122b81";
const BASE_URL = "https://api.themoviedb.org/3";
const trendingPeriod = "day";

const fetchTrendingMovies = () => {
  return fetch(
    `${BASE_URL}/trending/movie/${trendingPeriod}?api_key=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => console.log(error.message));
};

const fetchMovieById = (moveiId) => {
  return fetch(`
${BASE_URL}/movie/${moveiId}?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.json())
    .catch((error) => console.log(error.message));
};

const fetchMovieByName = (movieName) => {
  return fetch(
    `${BASE_URL}/search/movie?query=${movieName}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => console.log(error.message));
};

const fetchReviewById = (movieId) => {
  return fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => console.log(error.message));
};

const fetchMovieCreditsById = (movieId) => {
  return fetch(`
${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.json())
    .then((data) => data.cast)
    .catch((error) => console.log(error.message));
};

export {
  fetchTrendingMovies,
  fetchMovieById,
  fetchMovieByName,
  fetchReviewById,
  fetchMovieCreditsById,
};
