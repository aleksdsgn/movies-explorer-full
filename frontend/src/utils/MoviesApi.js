import { MOVIES_URL } from './constants';

class MoviesApi {
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

  getMovies() {
    return fetch(`${this._url}`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

export const moviesApi = new MoviesApi({
  mode: 'no-cors',
  baseUrl: MOVIES_URL,
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});
