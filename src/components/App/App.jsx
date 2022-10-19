import { React } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Routes, Route } from "react-router-dom";
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

function App() {
  //const [currentUser, setCurrentUser] = React.useState({});

  return (
    <CurrentUserContext.Provider>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header themeColor="header__gray" />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Header themeColor="header__white heder__burger" />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header themeColor="header__white" />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route
            path="/profile"
            element={
              <>
                <Header className="header__white">
                </Header>
                <Profile />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
