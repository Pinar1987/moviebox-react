import {useEffect, useState } from 'react'
import MovieCard from './components/MovieCard'


function App() {
  const [apiMovies, setApiMovies] = useState([])

   useEffect(() => {
  async function fetchMovies() {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )

    const data = await response.json()
    setApiMovies(data.results)
  }

  fetchMovies()
}, [])

  return (
    <main>
      <h1>MovieBox</h1>
      <p>Discover, explore and save your favourite movies.</p>

  {apiMovies.map((movie) => (
  <MovieCard
    key={movie.id}
    title={movie.title}
    rating={movie.vote_average}
    price={129}
  />
))}
        
    </main>
  )
}

export default App