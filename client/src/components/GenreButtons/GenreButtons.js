import React, { useContext, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { SearchContext } from "../../utils/SearchContext";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function GroupSizesColors() {
    const classes = useStyles();

    const { genreSearch, setAnimeData } = useContext(SearchContext);
    const [num, setNum] = useState("");

    useEffect(() => {
        genreSearch(num).then(res => {
            console.log(res)
            setAnimeData(res.results)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [num])

    return (
        <div className={classes.root}>
            <ButtonGroup size="large" style={{ background: "black" }} aria-label="outlined button group">
                <Button type="submit" color="secondary" onClick={() => setNum("1")}>Action</Button>
                <Button type="submit" color="primary" onClick={() => setNum("2")}>Adventure</Button>
                <Button type="submit" color="secondary" onClick={() => setNum("4")}>Comedy</Button>
                <Button type="submit" color="primary" onClick={() => setNum("7")}>Mystery</Button>
                <Button type="submit" color="secondary" onClick={() => setNum("10")}>Fantasy</Button>
                <Button type="submit" color="primary" onClick={() => setNum("14")}>Horror</Button>
            </ButtonGroup>
            <ButtonGroup style={{ background: "black" }} size="large" aria-label="outlined button group">
                <Button type="submit" color="primary" onClick={() => setNum("18")}>Mecha</Button>
                <Button type="submit" color="secondary" onClick={() => setNum("19")}>Music</Button>
                <Button type="submit" color="primary" onClick={() => setNum("22")}>Romance</Button>
                <Button type="submit" color="secondary" onClick={() => setNum("30")}>Sports</Button>
                <Button type="submit" color="primary" onClick={() => setNum("40")}>Psychological</Button>
                <Button type="submit" color="secondary" onClick={() => setNum("41")}>Thriller</Button>
            </ButtonGroup>
        </div>
    );
}