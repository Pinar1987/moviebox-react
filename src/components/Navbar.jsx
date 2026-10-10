import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const items = useSelector((state) => state.cart.items)

  return (
    <nav>
      <Link to="/">MOVIEBOX</Link>

      <Link to="/">Movies</Link>

      <Link to="/cart">
        Cart ({items.length})
      </Link>
    </nav>
  )
}

export default Navbar