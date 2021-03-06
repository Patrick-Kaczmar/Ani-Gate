import React, { useState, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import LoginForm from "../LoginForm";
import './style.scss';

function Nav() {
  const [loginExpanded, setLoginExpanded] = useState(false);
  const { email, loggedIn } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Anime sekai
      </a>
      { (() => {
        if (loggedIn) {
          return (
            <>
              <p className="logged-in-text">Logged in as {email} <Link to="/logout" onClick={() => setLoginExpanded(false)}>Logout</Link> </p>
              <div id="favLink">
                <Link to="/favorites"><button id="favButton"><h5>Your Favorites</h5></button></Link>
              </div>
            </>
          )
        }
        else {
          if (!loginExpanded) {
            return <button onClick={() => setLoginExpanded(true)}>Login</button>;
          }
          else {
            return (
              <Fragment>
                <LoginForm className="top-menu-login" />
                <button onClick={() => setLoginExpanded(false)}>X</button>
              </Fragment>
            )
          }
        }
      })()}

    </nav>
  );
}

export default Nav;
