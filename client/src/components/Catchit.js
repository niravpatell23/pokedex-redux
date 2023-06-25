import React, { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';


import {  Button } from '@material-ui/core';

import '../App.css';

import {useDispatch} from 'react-redux';
import actions from '../actions';
import {useSelector} from 'react-redux'



function Catchit(pokemon) {

// console.log(pokemon.pokemon)

const Alltrainers = useSelector((state)=>state.trainers)


const dispatch = useDispatch();


const catchPokemon = () => {
    var trainerId = ''

    Alltrainers.map((trainers)=>{
        // console.log(Alltrainers)
        if(trainers.select == true){
            trainerId = trainers.id
            console.log(trainerId)
            
        }
        return trainerId
      })
      console.log(pokemon.pokemon.name)
      
      console.log(trainerId)
      let url = "/pokemon/"+pokemon.pokemon.url.split('/')[6]
      console.log(url)
    dispatch(actions.catchPokemon(pokemon.pokemon.name,trainerId,url));
}

const releasePokemon = () => {
    

    var trainerId = ''

    Alltrainers.map((trainers)=>{
        // console.log(Alltrainers)
        if(trainers.select == true){
            trainerId = trainers.id
            console.log(trainerId)
            
        }
        return trainerId
      })
      console.log(pokemon.pokemon.name)
      
      console.log(trainerId)
    //   let url = "/pokemon/"+pokemon.pokemon.url.split('/')[6]
    //   console.log(url)
    dispatch(actions.releasePokemon(pokemon.pokemon.name,trainerId));
}


let trainerId1 = ''
let pokeName = pokemon.pokemon.name
var found = false
let totLen = 0

Alltrainers.map((trainers)=>{
    
    if(trainers.select == true){
        trainerId1 = trainers.id

        // console.log(trainers.pokemons.length)
        totLen = trainers.pokemons.length
            trainers.pokemons.map((poke)=>{
                if( poke.name == pokeName){
                    found = true
                }
            })
        
      

        // console.log(trainerId1)
        
    }
    return found
  })
var notSelected = true
  Alltrainers.map((trainers)=>{
    // console.log(Alltrainers)
    if(trainers.select == true){
        
         notSelected = false

    }

    
    return notSelected
  })


  if(notSelected == true){
      <div><Button color="secondary">Select trainer!</Button></div>
  }
  else{

   
    

        if (found==false) {
             if (totLen >= 6){   
                return (
                <div>
                    <Button color="secondary" >Team Full</Button>
                </div>
                )
         }
         else{
            return (
    
                <div>
                    <Button color="secondary" onClick={catchPokemon}>Catch</Button>
                </div>
            )
         }
            
        }
        else {
            return (
    
                <div>
                    <Button color="secondary" onClick={releasePokemon} >Release </Button>
                </div>
            )
        }

  
    

  }

    
}

export default Catchit