function MovieCard({ title, rating, price }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
      <p>Price: {price} SEK</p>
    </article>
  )
}

export default MovieCard