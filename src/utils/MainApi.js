import { BEATFILM_URL } from './constants';

export default class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.text().then((text) => {
      return Promise.reject({
        status: res.status,
        errorText:
          JSON.parse(text).message === 'Validation failed'
            ? JSON.parse(text).validation.body.message
            : JSON.parse(text).message
      });
    });
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, { headers: this._headers }).then(
      (res) => this._checkResponse(res)
    );
  }

  editProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        email: data.email
      }),
      headers: this._headers
    }).then((res) => this._checkResponse(res));
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, { headers: this._headers }).then(
      (res) => this._checkResponse(res)
    );
  }

  saveMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `${BEATFILM_URL}${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `${BEATFILM_URL}${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      }),
      headers: this._headers
    }).then((res) => this._checkResponse(res));
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then((res) => this._checkResponse(res));
  }
}