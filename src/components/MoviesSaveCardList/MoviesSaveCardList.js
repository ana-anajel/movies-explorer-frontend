import '../MoviesCardList/MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import '../Animation/Animation.css';

function MoviesSaveCardList({ saveMovies, deleteMovie, type }) {
  // const movies = JSON.parse(localStorage.getItem('arrSaveMovies'))

  const moviesElements = saveMovies.slice(0, saveMovies.length).map((card) => (
    <MoviesCard
      saveMovies={saveMovies}

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