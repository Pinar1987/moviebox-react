import { Link } from 'react-router-dom'
function MovieCard({ id, title, rating, price, posterPath}) {
  return (
    <Link to={`/movie/${id}`}>
      <article>
      <img
       className="movie-poster"
  src={`https://image.tmdb.org/t/p/w500${posterPath}`}
  alt={`${title} poster`}
/> 
        <h2>{title}</h2>
        <p>Rating: {rating}</p>
        <p>Price: {price} SEK</p>
      </article>
    </Link>
  )
}

export default MovieCard