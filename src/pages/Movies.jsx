import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'API/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const [searchData, setSearchData] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchData.get('search');

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    getMovies(query)
      .then(data => {
        setMovies([...data.results]);
      })
      .catch(error => setError(error))
      .finally(setIsLoading(false));
  }, [query]);

  const handleNameChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (input.trim() === '') {
      return alert('Input search data');
    }
    if (input.trim() !== query) {
      setMovies([]);
      setSearchData({ search: input.trim() });
    }
  };

  return (
    <>
      {error && <h1>Error!</h1>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="searchData"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={input}
            onChange={handleNameChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {isLoading && <Loader />}
      <MovieList movie={movies} />
    </>
  );
}
