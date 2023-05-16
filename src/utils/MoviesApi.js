import { BaseApi } from './BaseApi';
import { MAIN_API } from "../constants/Api";

class MoviesApi extends BaseApi {
  constructor(config) {
    super(config);
  }

  getMovies() {
    return super._request(`${this._url}/movies`, {
      method: 'GET',
      credentials: "include",
      headers: this._headers
    });
  }

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
  url: MAIN_API,
  headers: {
    'Content-Type': 'application/json'
  }
});
export { api };