import { Link } from "react-router-dom";
import s from "./MoviesList.module.css";

const MoviesList = ({ fetchedList }) => {
  return (
    <ul className={s.list}>
      {fetchedList.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>
              {movie.original_title
                ? `${movie.original_title}`
                : `${movie.title}`}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
