import MovieCard from './components/MovieCard'

const movies = [
  {
    id: 1,
    title: 'The Dark Knight',
    rating: 9.0,
    price: 129,
  },
  {
    id: 2,
    title: 'Interstellar',
    rating: 8.7,
    price: 119,
  },
  {
    id: 3,
    title: 'Inception',
    rating: 8.8,
    price: 109,
  },
]


function App() {
  return (
    <main>
      <h1>MovieBox</h1>
      <p>Discover, explore and save your favourite movies.</p>

  {movies.map((movie) => (
      <MovieCard
    key={movie.id}
    title={movie.title}
    rating={movie.rating}
    price={movie.price}
  />
))}

        
    </main>
  )
}

export default App