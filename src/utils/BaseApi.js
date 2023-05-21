export class BaseApi {
  constructor(config) {
    this._config = config;
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    return res.json().then(jsonRes => {
      if (res.ok) {
        return jsonRes;
      } else if (jsonRes.message) {
        return Promise.reject(`Ошибка: ${jsonRes.message}`);
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }
}