import { useSelector } from 'react-redux'


function Cart() {
  const items = useSelector((state) => state.cart.items)

  return (
    <main>
      <h1>Shopping Cart</h1>
      <p>Movies in cart: {items.length}</p>
    </main>
  )
}

export default Cart