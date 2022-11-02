class MoviesApi {
  constructor(config) {
    this._url = config.url;
  }



  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllMovies() {
    return fetch(this._url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi ({
  url: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
