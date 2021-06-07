import React, { useState } from "react";
import { Paper, Grid, GridListTile, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import API from "../../utils/API";
import "./AnimeCard.scss";

export default function Card() {

    const [cardArr, setCardArr] = useState([]);
    const [SessionUserID, setSessionUserID] = useState('')

    function formatData() {
        API.getAnime().then(res => {
            let arrData = res.data
            console.log(arrData)
            setCardArr(arrData)
        });

        API.getUser().then(res => {
            setSessionUserID(res.data._id)
        });
    }

    React.useEffect(() => {
        formatData()
    }, [])

    function handleDelete(id) {
        API.deleteAnime(id).then(res => {
            console.log("Card has been deleted sucssefuly")
            setCardArr(cardArr.filter(cards => cards.id !== res.data.id))
        })
    }

    return (
        <Grid container direction="row" justify="space-evenly" alignItems="center">
            {/*  eslint-disable-next-line */}
            {cardArr.map((card) => {
                if (card.userID === SessionUserID) return (
                    <Grid key={card._id} item className="aniGrid">
                        <Paper elevation={3} className="aniPaper">
                            <h3 id="title"><a href={card.url} target="_blank" rel="noopener noreferrer">{card.title}</a></h3>
                            <GridListTile className="imageTile">
                                <img src={card.image} alt="cardImage" id="cardImage" />
                            </GridListTile>
                            <Typography variant="h6" paragraph={true} id="syno">
                                {card.synopsis}
                            </Typography>
                            <Button variant="contained" color="secondary" className="button" startIcon={<DeleteIcon />} onClick={() => handleDelete(card._id)}>
                                Delete
                                </Button>
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>
    )
}
