import '../assets/css/app.css';
import { Link } from 'react-router-dom';

function MovieList(props) {
  return (
      <table className="table table-bordered table-dark">
          <thead>
              <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Length</th>
                  <th scope="col">Release Date</th>
              </tr>
          </thead>
          <tbody>

              {
                  props.movies.map((movie, index) => (
                      <tr key={index}>
                        <Link to={`/movies/${movie.id}`}>
                          <th className="table table-bordered table-dark" scope="row">{movie.id}</th>
                        </Link>
                          <td>{movie.title}</td>
                          <td>{movie.rating}</td>
                          <td>{movie.length + ' min'}</td>
                          <td>{(new Date(movie.releaseDate)).toLocaleDateString()}</td>
                      </tr>
                  ))
              }

          </tbody>
      </table>
  );
}

export default MovieList;