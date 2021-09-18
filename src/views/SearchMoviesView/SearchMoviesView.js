import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fetchMovieByName } from "../../fetchAPI/fetchAPI";
import MoviesList from "../../components/MoviesList";
import SearchForm from "../../components/SearchForm";

const SearchMoviesView = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchMovies, setSearchMovies] = useState(["empty"]);
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
      <SearchForm
        onSubmit={handleSubmit}
        inputValue={inputValue}
        onChange={handleInput}
      />
      {searchMovies !== null && searchMovies[0] !== "empty" ? (
        <MoviesList fetchedList={searchMovies} />
      ) : (
        false
      )}
      {searchMovies.length === 0 && (
        <>
          <h3>"{queryParam}"</h3>
          <p>No such movie found...</p>
          <p>Check your movie name and try again please</p>
        </>
      )}
    </>
  );
};

export default SearchMoviesView;
