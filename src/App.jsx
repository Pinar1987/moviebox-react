import { Routes, Route } from 'react-router-dom'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  )
}

export default App