import { BaseApi } from './BaseApi';
import { MOVIES_API } from "../constants/Api";

class MoviesApi extends BaseApi {
  constructor(config) {
    super(config);
  }
  getMovies() {
    return super._request(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
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