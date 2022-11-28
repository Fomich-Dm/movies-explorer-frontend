import { React, useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import "./App.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { register, authorize, getContent } from "../../utils/Auth";
import { useLocation } from "react-router-dom";
import UnprotectedRoute from "../UnpotectedRoute/UnprotectedRoute";
import { DURATION_MOVIES } from "../../utils/constant";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [movies, setMovies] = useState([]);
  const [saveMovies, setSaveMovies] = useState([]);

  const [allMoviesList, setAllMoviesList] = useState(
    JSON.parse(localStorage.getItem("allMoviesList"))
  );

  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem("allMovies")) ?? []
  );
  const [allSaveMovies, setAllSaveMovies] = useState(
    JSON.parse(localStorage.getItem("saveMovies"))
  );

  const [filterMovies, setFilterMovies] = useState(
    JSON.parse(localStorage.getItem("filterMovies")) ?? []
  );
  const [filterSaveMovies, setFilterSaveMovies] = useState(
    JSON.parse(localStorage.getItem("filterSaveMovies"))
  );

  const [preloaderActive, setPreloaderActive] = useState(false);
  const [checkbox, setCheckbox] = useState(
    JSON.parse(localStorage.getItem("checkbox"))
  );
  const [searchValue, setSearchValue] = useState(
    JSON.parse(localStorage.getItem("searchValue")) ?? ""
  );

  const [editInfo, setEditInfo] = useState(false);
  const navigate = useNavigate();
  const pathname = useLocation();

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user.data);
          getSaveMovies(user.data._id);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (!checkbox) {
      setMovies(allMovies);
      setSaveMovies(allSaveMovies);
      localStorage.setItem("checkbox", false);
    } else {
      setMovies(filterMovies);
      setSaveMovies(filterSaveMovies);
      localStorage.setItem("checkbox", true);
    }
  });

  const searchAllMovies = (value) => {
    setPreloaderActive(true);

    if (allMoviesList === null) {
      moviesApi
        .getAllMovies()
        .then((movies) => {
          localStorage.setItem("allMoviesList", JSON.stringify(movies));
          setAllMoviesList(movies);
          const moviesList = fitersMovies(movies, value);
          searchMovies(moviesList, value);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const moviesList = fitersMovies(allMoviesList, value);
      searchMovies(moviesList, value);
    }
  };

  const searchMovies = (moviesList, value) => {
    localStorage.setItem("searchValue", JSON.stringify(value));
    setSearchValue(value);
    localStorage.setItem("allMovies", JSON.stringify(moviesList));
    setAllMovies(moviesList);
    localStorage.setItem(
      "filterMovies",
      JSON.stringify(moviesList.filter((movie) => movie.duration <= DURATION_MOVIES))
    );
    setFilterMovies(moviesList.filter((movie) => movie.duration <= DURATION_MOVIES));
    setPreloaderActive(false);
  };

  const fitersMovies = (movies, value) => {
    return movies.filter((movie) => {
      if (value.length > 0) {
        return movie.nameRU.toLowerCase().includes(value.toLowerCase());
      } else {
      }
    });
  };

  const getSaveMovies = (data) => {
    mainApi
      .getSaveMovies()
      .then((movies) => {
        const moviesList = movies.data.filter((movie) => movie.owner === data);

        localStorage.setItem("saveMovies", JSON.stringify(moviesList));
        setAllSaveMovies(moviesList);

        localStorage.setItem(
          "filterSaveMovies",
          JSON.stringify(moviesList.filter((movie) => movie.duration <= DURATION_MOVIES))
        );
        setFilterSaveMovies(moviesList.filter((movie) => movie.duration <= DURATION_MOVIES));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchSaveMovies = (value) => {
    setPreloaderActive(true);
    const moviesList = JSON.parse(localStorage.getItem("saveMovies"));
    const filterMoviesList = fiterSaveMovies(moviesList, value);
    setAllSaveMovies(filterMoviesList);
    setFilterSaveMovies(
      filterMoviesList.filter((movie) => movie.duration <= DURATION_MOVIES)
    );
    setPreloaderActive(false);
  };

  const fiterSaveMovies = (movies, value) => {
    return movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = (email, password) => {
    authorize(email, password)
      .then((res) => {
        mainApi.setToken(res.token);
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setCurrentUser({
      name: "",
      email: "",
    });
    localStorage.removeItem("filterMovies");
    localStorage.removeItem("allMovies");
    localStorage.removeItem("allMoviesList");
    localStorage.removeItem("searchValue");
    setSearchValue("");
    setAllMoviesList(null);
    setAllMovies([]);
    setFilterMovies([]);
    setLoggedIn(false);
  };

  const handleUpdateUser = (data) => {
    mainApi
      .editUserInfo(data)
      .then((user) => {
        setCurrentUser(user.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMovieLike = (movie, setLike) => {
    const isLiked = saveMovies.some(
      (i) => i.movieId === movie.id || i.movieId === movie.movieId
    );
    if (!isLiked) {
      addMovies(movie, setLike);
    } else {
      deleteMovie(movie, setLike);
    }
  };

  const addMovies = (data, setLike) => {
    mainApi
      .saveMovies(movieDataСonversion(data))
      .then((newMovie) => {
        setLike(true);
        setAllSaveMovies([newMovie.data, ...allSaveMovies]);
        localStorage.setItem(
          "saveMovies",
          JSON.stringify([newMovie.data, ...allSaveMovies])
        );
        if (newMovie.data.duration < DURATION_MOVIES) {
          localStorage.setItem(
            "filterSaveMovies",
            JSON.stringify([newMovie.data, ...filterSaveMovies])
          );
          setFilterSaveMovies([newMovie.data, ...filterSaveMovies]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMovie = (data, setLike) => {
    const d = allSaveMovies.filter((movie) => {
      if (movie.movieId === data.id || movie.movieId === data.movieId) {
        return movie;
      }
    });

    mainApi
      .deleteMovie(d[0]._id)
      .then(() => {
        setLike(false);
        localStorage.getItem(
          "filterSaveMovies",
          setFilterSaveMovies((state) =>
            state.filter((c) => c.movieId !== data.movieId)
          )
        );
        setFilterSaveMovies((state) =>
          state.filter((c) => c.movieId !== data.id)
        );
        setAllSaveMovies((state) => state.filter((c) => c.movieId !== data.id));
        localStorage.getItem(
          "saveMovies",
          setAllSaveMovies((state) =>
            state.filter((c) => c.movieId !== data.movieId)
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const movieDataСonversion = (data) => {
    const movieData = {
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `https://api.nomoreparties.co/${data.image.url}`,
      trailerLink: data.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    };
    return movieData;
  };

  const tokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      getContent(token)
        .then((res) => {
          setCurrentUser(res.data);
          setLoggedIn(true);
          navigate(pathname);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header themeColor="header__gray" loggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            }
          />

          <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route
              path="/movies"
              element={
                <>
                  <Header
                    themeColor="header__white heder__burger"
                    loggedIn={loggedIn}
                  />
                  <Movies
                    searchAllMovies={searchAllMovies}
                    movies={movies}
                    onMovieLike={handleMovieLike}
                    loggedIn={loggedIn}
                    saveMovies={saveMovies}
                    checkbox={checkbox}
                    setCheckbox={setCheckbox}
                    preloaderActive={preloaderActive}
                    allMoviesList={allMoviesList}
                    searchValue={searchValue}
                  />
                  <Footer />
                </>
              }
            />

            <Route
              path="/saved-movies"
              element={
                <>
                  <Header themeColor="header__white" loggedIn={loggedIn} />
                  <SavedMovies
                    saveMovies={saveMovies}
                    onMovieLike={handleMovieLike}
                    searchSaveMovies={searchSaveMovies}
                    checkbox={checkbox}
                    setCheckbox={setCheckbox}
                    preloaderActive={preloaderActive}
                    allSaveMovies={allSaveMovies}
                  />
                  <Footer />
                </>
              }
            />

            <Route
              path="/profile"
              element={
                <>
                  <Header className="header__white" loggedIn={loggedIn} />
                  <Profile
                    handleUpdateUser={handleUpdateUser}
                    handleLogout={handleLogout}
                    editInfo={editInfo}
                    setEditInfo={setEditInfo}
                  />
                </>
              }
            />
          </Route>

          <Route element={<UnprotectedRoute loggedIn={loggedIn} />}>
            <Route
              path="/signup"
              element={<Register handleRegister={handleRegister} />}
            />

            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
