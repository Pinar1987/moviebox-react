import {useEffect, useState } from 'react'
import MovieCard from './components/MovieCard'


function App() {
  const [apiMovies, setApiMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  return (
    <main>
      <h1>MovieBox</h1>
      <p>Discover, explore and save your favourite movies.</p>

    {loading ? (
  <p>Loading movies...</p>
) : error ? (
  <p>{error}</p>
) : (
  apiMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          price={129}
        />
      ))
    )}
        
    </main>
  )
}

export default App