import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/cartSlice'




function Cart() {
  const items = useSelector((state) => state.cart.items)
const dispatch = useDispatch()
  return (
    <main>
      <h1>Shopping Cart</h1>
      <p>Movies in cart: {items.length}</p>

       {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((movie) => (
          <article key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Price: 129 SEK</p>

            <button onClick={() => dispatch(removeFromCart(movie.id))}>
              Remove
            </button>
          </article>
        ))
      )}
    </main>
  )
}

export default Cart