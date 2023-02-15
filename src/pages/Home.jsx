import { useState, useEffect } from 'react';
import { getTrends } from 'API/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

export default function Home() {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getTrends()
      .then(data => {
        setTrends(data.results);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {error && <h1>Error!</h1>}
      {isLoading && <Loader />}
      <MovieList movie={trends} />
    </>
  );
}
