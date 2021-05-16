import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import UserContext from "./utils/UserContext";
import SignUp from "./pages/SignUp";
import Logout from "./pages/Logout";
import SessionUser from "./utils/SessionUser";
import { SearchContext } from "./utils/SearchContext"

function App() {

  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  SessionUser(setEmail, setLoggedIn);

  const [animeData, setAnimeData] = useState([]);
  const [favoriteAnime, setFavoriteAnime] = useState({});

  const setData = (data) => {
    setAnimeData(data)
  };

  const setFavorite = (data) => {
    setFavoriteAnime(data)
  };

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=20`
    ).then((response) => response.json());
  };

  return (
    <Router>
      <UserContext.Provider value={{ email, setEmail, loggedIn, setLoggedIn }}>
        <SearchContext.Provider value={{ animeData, setData, favoriteAnime, setFavorite, search }}>
          <div>
            <Nav />
            <Switch>
              <Route exact path={["/", "/Home"]}>
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/logout">
                <Logout />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </SearchContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
