import { API_URL } from './constants';

class MainApi {
  constructor(apiConfig) {
    this._url = apiConfig.baseUrl;
    this._headers = apiConfig.headers;
  }

  _handleResponse(res) {
    return res.json().then((data) => {
      if (res.ok) {
        return data;
      }
      return Promise.reject(new Error(data.message));
    });
  }

  // установка токена
  setToken(token) {
    this._headers.Authorization = `Bearer ${token}`;
  }

  // регистрация
  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleResponse);
  }

  // авторизация
  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }

  // запрос данных профиля
  getProfileInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // сохранение отредактированных данных профиля
  updateProfileInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then(this._handleResponse);
  }

  // запрос сохраненных пользователем фильмов
  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // создание и загрузка новой карточки фильма на сервер
  saveMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  }

  // удаление фильма из сохраненных
  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

export const mainApi = new MainApi({
  mode: 'no-cors',
  baseUrl: API_URL,
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});
