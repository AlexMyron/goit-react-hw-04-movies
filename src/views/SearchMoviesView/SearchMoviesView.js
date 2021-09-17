import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fetchMovieByName } from "../../fetchAPI/fetchAPI";
import MoviesList from "../../components/MoviesList";
import SearchForm from "../../components/SearchForm";

const SearchMoviesView = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchMovies, setSearchMovies] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!queryParam) return;
    fetchMovieByName(queryParam).then((data) => setSearchMovies(data));
  }, [queryParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovieByName(inputValue).then((data) => setSearchMovies(data));

    history.push({ ...location, search: `query=${inputValue}` });
  };

  const handleInput = (e) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <>
      {!searchMovies ? (
        <SearchForm
          onSubmit={handleSubmit}
          inputValue={inputValue}
          onChange={handleInput}
        />
      ) : (
        <MoviesList fetchedList={searchMovies} />
      )}
    </>
  );
};

export default SearchMoviesView;
