import MovieCard from './components/MovieCard'


function App() {
  return (
    <main>
      <h1>MovieBox</h1>
      <p>Discover, explore and save your favourite movies.</p>

       <MovieCard 
       title="The Dark Knight"
        rating={9.0}
        price={129}
        />
    </main>
  )
}

export default App