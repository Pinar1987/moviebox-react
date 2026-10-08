import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetails() {
    const { id } = useParams()
    
    
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
    <h1>{movie.title}</h1>

    <p>{movie.overview}</p>

    <p>Rating: {movie.vote_average}</p>

    <p>Release date: {movie.release_date}</p>

    <p>Price: 129 SEK</p>
  </main>

  )
}

export default MovieDetails