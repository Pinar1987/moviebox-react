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

    {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((movie) => (
          <article key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Price: {convertPrice(129)}</p>

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