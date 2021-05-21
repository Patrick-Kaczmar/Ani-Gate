import React from "react";
import { Grid } from "@material-ui/core"
import AnimeCard from "../components/AnimeCard/AnimeCard"

export default function Favorites() {
    return(
        <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
            <Grid item><h1>Saved Shows</h1></Grid>
            <Grid item><AnimeCard /></Grid>
        </Grid>
    )
}