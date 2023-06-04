import '../MoviesCardList/MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import '../Animation/Animation.css';
import { useEffect, useState } from 'react';

function MoviesSaveCardList({ filteredMovies, deleteMovie, type }) {
  const movies = JSON.parse(localStorage.getItem('saveMoviesList'));
  // const searchQuery = localStorage.getItem('saveSearchQuery');

  // // const movies = JSON.parse(localStorage.getItem('saveMoviesList'));
  // const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('saveMoviesList')));
  // console.log('local', JSON.parse(localStorage.getItem('saveMoviesList')));
  // useEffect(() => {
  //   if (filteredMovies.length > 0) {
  //     console.log(filteredMovies);
  //     setMovies(filteredMovies);
  //   }
  // }, [searchQuery]);

  // console.log(2, filteredMovies, movies);

  const moviesElements = movies?.slice(0, movies.length).map((card) => (
    <MoviesCard
      saveMovies={movies}

      deleteMovie={deleteMovie}
      key={card._id}
      card={card}
      type={type}
    />
  ));

  return (
    <section className="cards">
      <div className='cards__list'>
        {moviesElements}
      </div>
    </section>
  );
}

export default MoviesSaveCardList;