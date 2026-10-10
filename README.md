# 🎬 MovieBox

MovieBox is a data-driven movie store built with React as an individual school project.

The application uses external APIs to let users browse movies, search for movies, view detailed information and save movies in a shopping cart.

## Features

- Browse popular movies from TMDb
- Search movies by title
- View detailed information about a selected movie
- View movie posters, ratings and release dates
- Add movies to a shopping cart
- Remove movies from the shopping cart
- View the number of movies in the cart
- Switch between SEK, EUR and USD
- Responsive movie catalogue
- Loading and error handling

## APIs

### TMDb API

TMDb is the main API used in MovieBox.

It provides movie data such as:

- Titles
- Posters
- Ratings
- Release dates
- Movie descriptions

### Frankfurter API

Frankfurter is used as a secondary API for currency conversion.

Movie prices have a base price in SEK and can dynamically be displayed in EUR or USD using current exchange rates.

By combining TMDb movie data with Frankfurter currency data, MovieBox implements an API mashup.

## Technologies

- React
- Vite
- JavaScript
- CSS
- React Router
- Redux Toolkit
- React Redux
- TMDb API
- Frankfurter API
- Git and GitHub


## State Management

MovieBox uses both local and global state.

`useState` is used for local component state such as movies, loading, errors, search input and selected currency.

Redux Toolkit is used for the shopping cart because the cart data needs to be accessed by multiple components, including MovieDetails, Navbar and Cart.

## Routing

React Router is used for navigation between the different views.

The application contains:

- Movie catalogue
- Dynamic movie detail view
- Shopping cart

A dynamic route is used for movie details:

`/movie/:id`

The movie ID is read with `useParams()` and used to fetch information about the selected movie from TMDb.

## Installation

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add a TMDb API key:

```env
VITE_TMDB_API_KEY=your_api_key
```

Start the development server:

```bash
npm run dev
```
## APIs

### TMDb API

TMDb is the main API used in MovieBox.

It provides movie data such as:

- Titles
- Posters
- Ratings
- Release dates
- Movie descriptions

### Frankfurter API

Frankfurter is used as a secondary API for currency conversion.

Movie prices have a base price in SEK and can dynamically be displayed in EUR or USD using current exchange rates.

By combining TMDb movie data with Frankfurter currency data, MovieBox implements an API mashup.

## Technologies

- React
- Vite
- JavaScript
- CSS
- React Router
- Redux Toolkit
- React Redux
- TMDb API
- Frankfurter API
- Git and GitHub