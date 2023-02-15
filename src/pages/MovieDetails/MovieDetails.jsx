import { Suspense } from 'react';
import { getDetails } from 'API/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movieTitle, setMovieTitle] = useState();
  const [moviePoster, setMoviePoster] = useState();
  const [movieVote, setMovieVote] = useState();
  const [movieOverview, setMovieOverview] = useState();
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieDate, setMovieDate] = useState();

  const [error, setError] = useState(null);
  const { id } = useParams();

  const location = useLocation();
  const backHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getDetails(id)
      .then(data => {
        setMovieTitle(data.title);
        setMoviePoster(data.poster_path);
        setMovieVote(data.vote_average);
        setMovieOverview(data.overview);
        setMovieGenres(data.genres);
        setMovieDate(data.release_date);
      })
      .catch(error => setError(error));
  }, [id]);

  return (
    <div>
      {error && <h1>Error!</h1>}
      {
        <>
          <Link to={backHref}>Go back</Link>
          <div className={css.Description}>
            {
              <img
                src={
                  moviePoster
                    ? `https://image.tmdb.org/t/p/w200/${moviePoster}`
                    : 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='
                }
                alt={movieTitle}
              />
            }
            <div>
              <h1>
                {movieTitle}({movieDate})
              </h1>
              <p>User score: {Math.round(movieVote * 10)}%</p>
              <h2>Overview</h2>
              <p>{movieOverview}</p>
              <h2>Genres</h2>
              <p>{movieGenres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="Cast" state={{ from: backHref }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="Reviews" state={{ from: backHref }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      }
    </div>
  );
}
