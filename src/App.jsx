import { Routes, Route } from 'react-router-dom'
import Movies from './pages/Movies'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
    </Routes>
  )
}

export default App