import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCreditsById } from "../../fetchAPI/fetchAPI";
import s from "./CastView.module.css";

const CastView = () => {
  const [castData, setCastData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCreditsById(movieId).then((data) => setCastData(data));
  }, [movieId]);

  return (
    <ul className={s.list}>
      {castData ? (
        castData.map((actor) => {
          return (
            <li key={actor.cast_id} className={s.item}>
              <p>Character: {actor.character}</p>
              <div className={s.imageWrapper}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <img
                    src={`https://www.mundo-mania.com/wp-content/uploads/2019/12/Mickey-Mouse.png`}
                    alt={actor.name}
                  />
                )}
              </div>
              <p>{actor.name}</p>
            </li>
          );
        })
      ) : (
        <p>There is nothing about movie cast...</p>
      )}
    </ul>
  );
};

export default CastView;
