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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // const [userData, setUserData] = useState({ name: "", email: "" });
  const [movies, setMovies] = useState([]);
  const [saveMovies, setSaveMovies] = useState([])
  const [editInfo, setEditInfo] = useState(false);
  const navigate = useNavigate();
  const pathname = useLocation();

  useEffect(() => {
    mainApi.getUserInfo().then((user) => {
      setCurrentUser(user.data);
    });
    moviesApi
      .getAllMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
      tokenCheck();
  }, [loggedIn]);

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then((data) => {
        console.log(data);
        //setUserData({ name: data.name, email: data.email });
        navigate("/signin");
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

  const addMovies = (data) => {
    console.log()
    mainApi.saveMoviesq(data).then((newMovie) => {
      console.log(newMovie)
      setSaveMovies([newMovie, ...saveMovies])
    }).catch((err) => {
      console.log(err);
    })
  }

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
                  <Movies movies={movies} addMovies={addMovies} />
                  <Footer />
                </>
              }
            />

            <Route
              path="/saved-movies"
              element={
                <>
                  <Header themeColor="header__white" loggedIn={loggedIn} />
                  <SavedMovies />
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

          <Route
            path="/signup"
            element={<Register handleRegister={handleRegister} />}
          />

          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
