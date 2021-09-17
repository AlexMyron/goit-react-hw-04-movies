import { useHistory, NavLink, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { getGenres } from "../../functions/functions";
import s from "./MovieCard.module.css";

const CastView = lazy(() =>
  import("../../views/CastView" /* webpackChunkName: "Cast-view" */)
);
const ReviewsView = lazy(
  () => import("../../views/ReviewsView") /* webpackChunkName: "Reviews-view" */
);

const MovieCard = ({ movieData, movieYear }) => {
  const history = useHistory();

  return (
    <div>
      {movieData && (
        <div className={s.wrapper}>
          <button
            className={s.btn}
            type="button"
            onClick={() => history.goBack()}
          >
            Go back
          </button>
          <div className={s.mainInfo}>
            <div className={s.imageWrapper}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={movieData.original_title}
              />
            </div>
            <div className="movieData">
              <h2>
                {movieData.original_title} ({movieYear})
              </h2>
              <p>User Score: {movieData.popularity}</p>
              <h3>Overview</h3>
              <p>{movieData.overview}</p>
              <h3>Genres</h3>
              <span className={s.genres}>{getGenres(movieData.genres)}</span>
            </div>
          </div>
          <div className={s.addInfo}>
            <h3>Additional information</h3>
            <ul>
              <li className="castItem">
                <NavLink to={`/movies/${movieData.id}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`/movies/${movieData.id}/reviews`}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Suspense fallback={<p>Loading...</p>}>
        <Route path={`/movies/:movieId/cast`}>
          <CastView />
        </Route>
        <Route path={`/movies/:movieId/reviews`}>
          <ReviewsView />
        </Route>
      </Suspense>
    </div>
  );
};

export default MovieCard;
