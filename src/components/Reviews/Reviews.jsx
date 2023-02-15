import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'API/api';
import { Loader } from 'components/Loader/Loader';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {error && <h1>Error!</h1>}
      {isLoading && <Loader />}
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author : {review.author}</h3>
              <p> {review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}
