import PropTypes from 'prop-types';
import { useLocation, NavLink } from 'react-router-dom';

export const MovieList = ({ movie }) => {
  const location = useLocation();

  return (
    <ul>
      {movie.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='
              }
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
