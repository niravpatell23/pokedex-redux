import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Pokemon from "./Pokemon";
import Error from "./404";

import Catchit from "./Catchit";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import actions from "../actions";
import { useSelector } from "react-redux";

// import SearchShows from './SearchShows';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 5,
    border: "1px solid #1e8678",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);",
  },
  titleHead: {
    borderBottom: "1px solid #1e8678",
    fontWeight: "bold",
  },
  grid: {
    flexGrow: 1,
    flexDirection: "row",
  },
  media: {
    height: "100%",
    width: "100%",
  },
  button: {
    color: "#1e8678",
    fontWeight: "bold",
    fontSize: 12,
    justifyContent: "center",
  },
});

function PokemonList(props) {
  const regex = /(<([^>]+)>)/gi;
  const [pokemons, setPokemons] = useState(undefined);

  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [notfd, setNotfd] = useState(false);
  const [totPage, settotPage] = useState(undefined);

  const { pagenum } = useParams();

  let card = null;

  useEffect(() => {
    // console.log("enter useeffect");

    async function fetchData() {
      try {
        console.log(1);
        const data = await axios.get(
          "https://pokedex-redux-seven.vercel.app/pokemon/page/" + pagenum
        );
        console.log("data" + data);

        let total = data.data.count;

        let tot = total / 20;
        total % 20 > 0 ? (tot = tot + 1) : (tot = tot + 0);

        settotPage(tot);
        setPokemons(data.data.results);
        setLoading(false);
        // console.log(data)

        if (data.data.results.length == 0) {
          setNotfd(true);
          // return <Error/>
        }
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, [pagenum]);

  const Alltrainers = useSelector((state) => state.trainers);
  if (!pokemons) {
    return <Error />;
  } else if (notfd) {
    return <Error />;
  } else {
    let imageData = pokemons;

    return (
      <div>
        <br />

        {parseInt(pagenum) === 0 ? (
          <p></p>
        ) : (
          <Link to={`/pokemon/page/${parseInt(pagenum) - 1}`}>Previous</Link>
        )}
        <span> </span>
        {parseInt(pagenum) > totPage - 2 ? (
          <p></p>
        ) : (
          <Link to={`/pokemon/page/${parseInt(pagenum) + 1}`}>Next</Link>
        )}

        <br />
        <br />

        {/* ////////////////// */}

        {imageData.map((image_obj) => (
          <Grid item key={image_obj.id} xs={12}>
            <Card className={classes.card}>
              <CardActionArea>
                <Link to={`/pokemon/${image_obj.url.split("/")[6]}`}>
                  <CardMedia
                    className={classes.media}
                    image={image_obj.url}
                    title={image_obj.posterName}
                  ></CardMedia>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      align="center"
                      component="h2"
                    >
                      {image_obj.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="left"
                      color="textPrimary"
                      component="p"
                    >
                      {image_obj.description}
                    </Typography>
                  </CardContent>
                </Link>
                <CardActionArea>
                  <Grid container className={classes.button}>
                    <Grid item>
                      <Catchit pokemon={image_obj}></Catchit>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </CardActionArea>
            </Card>
            <br></br>
          </Grid>
        ))}

        {/* ////////////////// */}
      </div>
    );
  }
}

export default PokemonList;
