import React from "react";
import SearchBar from "../components/SearchBar/searchBar"
import { Grid } from "@material-ui/core"
import "./Home.scss"
// import API from "../utils/API";
// import { Link } from "react-router-dom";


function Home() {

  return (
    <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
        <Grid item>
          <img alt="yuno-banner" src={`${process.env.PUBLIC_URL}/yuno-banner.png`} id="yunoBanner" />
        </Grid>
        <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
          <Grid item className="searchbar">
            <SearchBar />
          </Grid>
        </Grid>
    </Grid>
  );
}

export default Home;
