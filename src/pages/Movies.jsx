import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

function Movies() {
  const [apiMovies, setApiMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchMovies() {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        )

        if (!response.ok) {
          throw new Error('Could not load movies.')
        }

        const data = await response.json()
        setApiMovies(data.results)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  const filteredMovies = apiMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main>
      <h1>MovieBox</h1>
      <p>Discover, explore and save your favourite movies.</p>

      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {loading ? (
        <p>Loading movies...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            price={129}
          />
        ))
      )}
    </main>
  )
}

export default Movies