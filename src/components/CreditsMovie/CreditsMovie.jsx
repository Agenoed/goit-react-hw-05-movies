import { getCredits } from 'API/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export default function Credits() {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCredits(id)
      .then(data => {
        setCredits(data.cast);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [id]);
  return (
    <>
      {error && <h1>Error!</h1>}
      {isLoading && <Loader />}
      <ul>
        {credits.map(actor => (
          <li key={actor.credit_id}>
            <img
              width="200px"
              src={
                actor.profile_path
                  ? `https://www.themoviedb.org/t/p/w200/${actor.profile_path}`
                  : 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='
              }
              alt={`${actor.name}`}
            />
            <p>Name : {actor.name} </p>
            <p>Character : {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
