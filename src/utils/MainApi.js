import { BaseApi } from './BaseApi';

class MainApi extends BaseApi {
  constructor(config) {
    super(config);
  }

  register(name, email, password) {
    return super._request(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password
      })
    });
  }

  authorize(email, password) {
    return super._request(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password
      })
    });
  }

  checkToken() {
    return super._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    });
  }

  getDataUser() {
    return super._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    });
  }

  editDataUser(email, name) {
    return super._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        email,
        name
      })
    });
  }

}

const auth = new MainApi({
  //url: 'http://localhost:3001',
  url: 'https://api.dip.movies-explorer.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
export { auth };