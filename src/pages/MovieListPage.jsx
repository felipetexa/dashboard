import { useState, useEffect } from "react";
import api from '../services/api';
import MovieList from "../components/MovieList";


function MovieListPage() {

  const [movies, setMovies] = useState([])

  async function loadMovies(){
    const response = await api.get("/api/movies");
    setMovies(response.data);
  }

  useEffect(() => {
    loadMovies()
  }, []);

  return(
    
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Movie List</h1>
		  </div>
      <div className="row">
        <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default MovieListPage;