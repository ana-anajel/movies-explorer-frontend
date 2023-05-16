import { BaseApi } from './BaseApi';
import { MAIN_API } from "../constants/Api";

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
      credentials: 'include',
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
      credentials: 'include',
      headers: this._headers
    });
  }

  getDataUser() {
    return super._request(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    });
  }

  editDataUser(email, name) {
    return super._request(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        email,
        name
      })
    });
  }

  signOut() {
    return super._request(`${this._url}/signout`, {
      method: 'PATCH',
      credentials: 'include'
    });
  }
}

const auth = new MainApi({
  url: MAIN_API,
  headers: {
    'Content-Type': 'application/json'
  }
});
export { auth };