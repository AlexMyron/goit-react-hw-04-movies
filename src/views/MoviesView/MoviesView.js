import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById, fetchReviewById } from "../../fetchAPI/fetchAPI";
import MovieCard from "../../components/MovieCard";
import { cuttedDate } from "../../functions/functions";

const MoviesView = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [releaseYear, setRelease_year] = useState("");
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then((data) => {
      setMovieData(data);
      const year = cuttedDate(data.release_date);
      setRelease_year(year);
    });
    fetchReviewById(movieId).then((reviews) => setReviews(reviews));
  }, [movieId]);

  return (
    <MovieCard
      movieData={movieData}
      reviews={reviews}
      movieYear={releaseYear}
    />
  );
};

export default MoviesView;
