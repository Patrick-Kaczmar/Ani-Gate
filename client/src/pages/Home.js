import React from "react";
import SearchBar from "../components/SearchBar/searchBar"
import SingleGrid from "../components/SingleGrid/SingleGrid"
import { Grid } from "@material-ui/core"
import GenreButtons from "../components/GenreButtons/GenreButtons"
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import "./Home.scss"


function Home() {

  return (
    <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
      <Grid item>
        <img alt="yuno-banner" src={`${process.env.PUBLIC_URL}/yuno-banner.png`} id="yunoBanner" />
      </Grid>
      <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
        <Grid item className="searchbar">
          <SearchBar />
          <h4 id="buttonDesc">Select one of the genre's below for reccomendations!</h4>
          <GenreButtons />
        </Grid>
        <Grid item className="singleGrid">
          <SingleGrid />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
