import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import {Typography} from '@material-ui/core'
import API from "../../utils/API"
import { SearchContext } from "../../utils/SearchContext"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height: '400px'
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
  },
  singleCard: {
    height: '383px !important'
  },
  synopsisTileBar: {
    height: '90% !important',
    width: '100% !important',
    whiteSpace: 'normal',
    opacity: '0%',
    '&:hover': {
      opacity: '100%'
    }
  },
  hiddenText: {
    fontSize: '20px',
    whiteSpace: 'normal',
    lineHeight: '1.5'
  }
}));


export default function SingleLineGridList(props) {
  const classes = useStyles();

  const { setFavoriteAnime, animeData } = useContext(SearchContext);
  const [animeForm, setAnimeForm] = useState({})

  function createAnime(event, data) {
    event.preventDefault();
    API.getUser().then(res => {
      console.log('this is the user data i need: ' + JSON.stringify(res.data._id))
      API.saveAnime({
        id: data.mal_id,
        userID: res.data._id,
        title: data.title,
        image: data.image_url,
        url: data.url,
        synopsis: data.synopsis
      })
        .then(res => setAnimeForm({ ...res }))
        .then(setFavoriteAnime(animeForm))
        .catch(err => console.log(err))
    })
  }

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5}>
        {animeData.map((anime) => (
          <GridListTile className={classes.singleCard} key={anime.mal_id}>
            <img src={anime.image_url} alt={anime.title} style={{ height: '100%', width: '100%' }} />
            <GridListTileBar
              title={<a href={anime.url} target="_blank" rel="noopener noreferrer">{anime.title}</a>}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${anime.title}`} onClick={(event) => createAnime(event, anime)}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
            <GridListTileBar
              title={anime.synopsis}
              titlePosition='top'
              classes={{
                root: classes.synopsisTileBar,
                title: classes.hiddenText
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
