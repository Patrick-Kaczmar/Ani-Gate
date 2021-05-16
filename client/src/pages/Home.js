import React, { useContext } from "react";
import SearchBar from "../components/SearchBar/searchBar"
import SingleGrid from "../components/SingleGrid/SingleGrid"
import { Grid } from "@material-ui/core"
import { SearchContext } from "../utils/SearchContext";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import "./Home.scss"


function Home() {

  const search = useContext(SearchContext);

  return (
    <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
      <Grid item>
        <img alt="yuno-banner" src={`${process.env.PUBLIC_URL}/yuno-banner.png`} id="yunoBanner" />
      </Grid>
      <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
        <Grid item className="searchbar">
          <SearchBar />
        </Grid>
        <SingleGrid results={search.animeData}/>
      </Grid>
    </Grid>
  );
}

export default Home;
