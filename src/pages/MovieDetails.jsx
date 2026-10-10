import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

function MovieDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    
    
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
  async function fetchMovieDetails() {
    try {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      )

      if (!response.ok) {
        throw new Error('Could not load movie details.')
      }

      const data = await response.json()
      setMovie(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  fetchMovieDetails()
}, [id])
  

   if (loading) {
  return <p>Loading movie details...</p>
}

if (error) {
  return <p>{error}</p>
}

return (
  <main>

    <img
  className="details-poster"
  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  alt={`${movie.title} poster`}
/>
    
    <h1>{movie.title}</h1>

    <p>{movie.overview}</p>

    <p>Rating: {movie.vote_average.toFixed(1)}</p>

    <p>Release date: {movie.release_date}</p>

    <p>Price: 129 SEK</p>

   
    <div className="details-actions">
    <button onClick={() => dispatch(addToCart(movie))}>
  Add to cart
</button>

<Link to="/cart">Go to cart</Link>
</div>
 
  </main>
  

  )
}

export default MovieDetails