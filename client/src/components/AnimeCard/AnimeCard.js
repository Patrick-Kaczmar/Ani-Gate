import React, { useState } from "react";
import { Paper, Grid, GridListTile, Typography } from "@material-ui/core"
import API from "../../utils/API"
import "./AnimeCard.scss"

export default function Card() {

    const [cardArr, setCardArr] = useState([])

    function formatData() {
        API.getAnime().then(res => {
            let arrData = res.data
            console.log(arrData)
            setCardArr(arrData)
        })
    }

    React.useEffect(() => {
        formatData()
    }, [])

    return (
        <Grid container direction="row" justify="space-evenly" alignItems="center">
            {cardArr.map((card) => (
                <Grid key={card.id} item className="aniGrid">
                    <Paper elevation={3} className="aniPaper">
                        <h3 id="title">{card.title}</h3>
                        <GridListTile className="imageTile">
                            <img src={card.image} alt="cardImage" id="cardImage" />
                        </GridListTile>
                        <Typography variant="h6" paragraph={true} id="syno">
                            {card.synopsis}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    )
}
