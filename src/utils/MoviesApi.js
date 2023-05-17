import { BaseApi } from './BaseApi';
import { MOVIES_API } from "../constants/Api";

class MoviesApi extends BaseApi {
  getMovies() {
    return super._request(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    });
  }

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
}

const api = new MoviesApi({
  url: MOVIES_API,
  headers: {
    'Content-Type': 'application/json'
  }
});
export { api };