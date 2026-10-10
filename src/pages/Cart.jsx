import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/cartSlice'




function Cart() {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const [currency, setCurrency] = useState('SEK')
  const [rates, setRates] = useState({})
 
  
  useEffect(() => {
  async function fetchRates() {
    try {
      const response = await fetch(
        'https://api.frankfurter.dev/v2/rates?base=SEK&quotes=EUR,USD'
      )

      if (!response.ok) {
        throw new Error('Could not load currency rates.')
      }

      const data = await response.json()

      const ratesObject = {}

      data.forEach((item) => {
        ratesObject[item.quote] = item.rate
      })

      setRates(ratesObject)
    } catch (error) {
      console.error(error)
    }
  }

  fetchRates()
}, [])

function convertPrice(price) {
  if (currency === 'SEK') {
    return `${price} SEK`
  }

  if (!rates[currency]) {
    return 'Loading currency...'
  }

  return `${(price * rates[currency]).toFixed(2)} ${currency}`
}  
  const totalPrice = items.length * 129
 
  return (
    <main>
      <h1>Shopping Cart</h1>
      <p>Movies in cart: {items.length}</p>
   
   <label>
  Currency:
  <select
    value={currency}
    onChange={(event) => setCurrency(event.target.value)}
  >
    <option value="SEK">SEK</option>
    <option value="EUR">EUR</option>
    <option value="USD">USD</option>
  </select>
</label>

<div className="cart-layout">

  <div className="cart-list">
    {items.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      items.map((movie) => (
        <article className="cart-item" key={movie.id}>
          <img
            className="cart-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />

          <div className="cart-item-info">
            <h2>{movie.title}</h2>
            <p className="cart-item-type">Movie</p>
            <p className="cart-price">{convertPrice(129)}</p>
          </div>

          <button
            className="remove-button"
            onClick={() => dispatch(removeFromCart(movie.id))}
          >
            Remove
          </button>
        </article>
      ))
    )}
  </div>

    
   {items.length > 0 && (
  <section className="order-summary">
    <h2>Order Summary</h2>

    <div className="summary-row">
      <span>Movies</span>
      <span>{items.length}</span>
    </div>

    <div className="summary-total">
      <span>Total</span>
      <span>{convertPrice(totalPrice)}</span>
    </div>

    <button
  className="checkout-button"
  onClick={() => alert('Checkout is not implemented in this demo.')}
>
  Proceed to checkout
</button>
  </section>
)}
 </div>
    </main>
  )
}     

export default Cart