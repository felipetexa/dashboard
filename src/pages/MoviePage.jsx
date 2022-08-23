import { useParams } from 'react-router-dom'

function MoviePage() {
  const {id} = useParams();
  return (
    <div>
      <h1>Movie {id}</h1>
    </div>
  )
}

export default MoviePage