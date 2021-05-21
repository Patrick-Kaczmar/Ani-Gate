import React, { useState } from "react";
import { Paper, Grid } from "@material-ui/core"
import API from "../../utils/API"

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
        <Grid container direction="row" justify="space-evenly" alignItems="baseline">
             {cardArr.map((card) => (
                    <Grid key={card.id} item>
                        <Paper elevation={3}>
                            <h5>{card.title}</h5>
                        </Paper>
                    </Grid>
                ))}
        </Grid>
    )
}
            