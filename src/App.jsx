import { Routes, Route } from 'react-router-dom'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Cart from './pages/cart'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
  )
}

export default App