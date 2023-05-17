import { BaseApi } from './BaseApi';
import { MOVIES_API } from "../constants/Api";

class MoviesApi extends BaseApi {
  getMovies() {
    return super._request(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    });
  }

  // getMovies() {
  //   return super._request(`${this._url}/movies`, {
  //     method: 'GET',
  //     credentials: "include",
  //     headers: this._headers
  //   });
  // }

  // createMovie(data) {
  //   return super._request(`${this._url}/movies`, {
  //     method: 'POST',
  //     credentials: "include",
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       country,
  //       director,
  //       duration,
  //       year,
  //       description,
  //       image,
  //       trailerLink,
  //       thumbnail,
  //       nameRU,
  //       nameEN,
  //       movieId,
  //     } = data)
  //   });
  // }

  deleteLikeMovie(id) {
    return super._request(`${this._url}/movies/${id}/likes`, {
      method: 'DELETE',
      credentials: "include",
      headers: this._headers,
    });
  }

  likeMovie(id) {
    return super._request(`${this._url}/movies/${id}/likes`, {
      method: 'PUT',
      credentials: "include",
      headers: this._headers,
    });
  }

  deleteMovie(id) {
    return super._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      credentials: "include",
      headers: this._headers,
    });
  }

}

const api = new MoviesApi({
  url: MOVIES_API,
  headers: {
    'Content-Type': 'application/json'
  }
});
export { api };