import { fetchReviewById } from "../../fetchAPI/fetchAPI";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import s from "./ReviewsView.module.css";

const ReviewsView = () => {
  const [reviews, setReviews] = useState(null);
  const location = useLocation();
  const movieId = Number(location.pathname.split("/")[2]);

  useEffect(() => {
    fetchReviewById(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul className={s.reviewsList}>
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => {
          return (
            <li className={s.reviewsItem} key={review.id}>
              <h3>Author: {review.author}</h3>
              <div className="imageWrapper">
                {review.author_details.avatar_path ? (
                  <img
                    src={review.author_details.avatar_path.slice(1)}
                    width="200"
                    alt={review.author}
                  />
                ) : (
                  <img
                    src={
                      "https://cdn3.iconfinder.com/data/icons/persona/192/6_writing_pen_write_paper_take_note_copy_writing_avatar_face-512.png"
                    }
                    width="200"
                    alt={review.author}
                  />
                )}
              </div>
              <p className="text">{review.content}</p>
            </li>
          );
        })
      ) : (
        <h3>Any reviews found...</h3>
      )}
    </ul>
  );
};

export default ReviewsView;
