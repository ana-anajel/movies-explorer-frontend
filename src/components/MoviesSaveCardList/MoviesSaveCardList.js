import '../MoviesCardList/MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import '../Animation/Animation.css';

function MoviesSaveCardList({ deleteMovie, type }) {
  const movies = JSON.parse(localStorage.getItem('arrSaveMovies'))
  console.log(movies);

  const moviesElements = movies ? movies.slice(0, movies.length).map((card) => (
    <MoviesCard
      deleteMovie={deleteMovie}
      key={card._id}
      card={card}
      type={type}
    />
  )) : '';

  return (
    <section className="cards">
      <div className='cards__list'>
        {moviesElements}
      </div>
    </section>
  );
}

export default MoviesSaveCardList;