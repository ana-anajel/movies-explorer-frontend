import { BaseApi } from './BaseApi';

class MoviesApi extends BaseApi {
  constructor(config) {
    super(config);
  }

  getInitialMovies() {
    return super._request(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers
    });
  }

  addNewMovie(name, link) {
    return super._request(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    });
  }

  deleteLikeMovie(id) {
    return super._request(`${this._url}/movies/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  likeMovie(id) {
    return super._request(`${this._url}/movies/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    });
  }

  deleteMovie(id) {
    return super._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

}

const auth = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
export { auth };