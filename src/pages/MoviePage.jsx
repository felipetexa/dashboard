import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import api from '../services/api';
import '../assets/css/app.css';

function MoviePage() {

  const {id} = useParams();

  const [movie, setMovie] = useState([])

  async function loadMovie(){
    const response = await api.get(`/api/movies/${id}`);
    setMovie([{
      title: response.data.title,
      rating: response.data.rating,
      length: response.data.length,
      releaseDate: response.data.releaseDate
    }]);
  }

  useEffect(() => {
    loadMovie()
});

  return (
    <div>
      <h1>Movie {id}</h1>
      <table className="table table-bordered table-dark">
          <thead>
              <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Length</th>
                  <th scope="col">Release Date</th>
              </tr>
          </thead>
          <tbody>
            {
                    movie.map((movie, index) => (
                      <tr key={index}>
                          <td>{movie.title}</td>
                          <td>{movie.rating}</td>
                          <td>{movie.length + ' min'}</td>
                          <td>{(new Date(movie.releaseDate)).toLocaleDateString()}</td>
                      </tr>
                    ))
            }

          </tbody>
      </table>
    </div>
  )
}

export default MoviePage