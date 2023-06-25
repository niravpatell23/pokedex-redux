import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
// import Pokemon from './Pokemon';
import Error from './404';

import {useDispatch} from 'react-redux';
import actions from '../actions';

import Catchit from './Catchit';

import { makeStyles, CardActionArea,Grid,Card, CardContent, CardMedia, Typography, CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
	card: {
		maxWidth: 550,
		height: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: 5,
		border: '1px solid #1e8678',
		boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
	},
	titleHead: {
		borderBottom: '1px solid #1e8678',
		fontWeight: 'bold'
	},
	grid: {
		flexGrow: 1,
		flexDirection: 'row'
	},
	media: {
		height: '100%',
		width: '100%'
	},
	button: {
		color: '#1e8678',
		fontWeight: 'bold',
		fontSize: 12,
        justifyContent: 'center'
	}
});


function Pokemon(props) {

  
    const [pokemons, setPokemons] = useState(undefined);

    const classes = useStyles();

    const [ loading, setLoading ] = useState(true);

   

    const {id}= useParams();

    let card = null;

    const dispatch = useDispatch();

    useEffect(
        () => {
            console.log("enter useeffect");
          

            async function fetchData() {
                try {

                    const  data  = await axios.get('http://localhost:4000/pokemon/'+id);
                    
                    
                    setPokemons(data.data);
                    setLoading(false);
                    // console.log(data)

                 
                    

                } catch (e) {
                    console.log(e);
                }
            }


            fetchData();
        }, [id]
    );



    let description = null;
    let types = null;
	const regex = /(<([^>]+)>)/gi;
	if (pokemons && pokemons.description) {
		description = pokemons && pokemons.description.replace(regex, '');
	} else {
		description = 'No description';
	}
    if (pokemons && pokemons.types) {
		types = pokemons && pokemons.types.map((show)=>{
            return <dd> {show.type.name} </dd>
        })
	} else {
		types = 'No type';
	}
    if (!pokemons) {
		return <Error/>
	}
	if (loading) {
		return (
			<div>
				<h2>Loading....</h2>
			</div>
		);
	} else {
		return (
			<Card className={classes.card} variant='outlined'>
				<CardHeader className={classes.titleHead} title={pokemons.name} />
				<CardMedia
					className={classes.media}
					component='img'
					
					image={`${pokemons.sprites.front_default}`}
					title='show image'
				/>

				<CardContent>
					<Typography variant='body2' color='textSecondary' >
						<dl>
							
							
								<dt >Description:</dt>
								<dd>{description}</dd>
							
							
							
						</dl>
                        <dl>
							
							
								<dt >Types:</dt>
								{types}
							
							
							
						</dl>
                        <dl>
							
							
								<dt >Height:</dt>
								<dd>{pokemons && pokemons.height}</dd>
							
							
							
						</dl>
                       
                        <br/>
                        <CardActionArea>
                                    <Grid container className={classes.button}>
                                        <Grid item>
                                            <Catchit pokemon={{name:pokemons.name, url:"/////pokemon/"+id}} ></Catchit>
                                        </Grid>
                                    </Grid>

                                </CardActionArea>
                            <br/>
                       
						<Link to='/pokemon/page/0'>Back to all characters...</Link>
					</Typography>
				</CardContent>
			</Card>
		);
	}
}

export default Pokemon