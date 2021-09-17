import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../fetchAPI/fetchAPI";
import MoviesList from "../../components/MoviesList";
import s from "./HomeView.module.css";

const HomeView = () => {
  const [trending, setTrending] = useState([]);
  // const [error, setError] = useState('');
  useEffect(() => {
    fetchTrendingMovies().then((data) => setTrending(data));
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      <MoviesList fetchedList={trending} />
    </>
  );
};

export default HomeView;
