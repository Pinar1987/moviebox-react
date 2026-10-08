import { Link } from 'react-router-dom'
function MovieCard({ id, title, rating, price }) {
  return (
    <Link to={`/movie/${id}`}>
      <article>
        <h2>{title}</h2>
        <p>Rating: {rating}</p>
        <p>Price: {price} SEK</p>
        <p>ID: {id}</p>
      </article>
    </Link>
  )
}

export default MovieCard