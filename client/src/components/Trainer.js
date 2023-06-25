import React from 'react';
import {useDispatch} from 'react-redux';
import actions from '../actions';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

function Trainer(props) {

    const Alltrainers = useSelector((state)=>state.trainers)
    
    let count = 0

    //   console.log(Alltrainers)

    const dispatch = useDispatch();

    const deleteTrainer = () => {
        dispatch(actions.deleteTrainer(props.trainers.id));
      };

      const selectTrainerToggle = (selectFlag) => {
          
        if (selectFlag === 'select') 
        {

            Alltrainers.map((trainers)=>{
                // console.log(Alltrainers)
                if(trainers.select == true){
                    count= 1
                    
                }
                return count
              })
            //   console.log(count)
            if(count == 0){
                count = 1
                dispatch(actions.selectTrainer(props.trainers.id))
            }
            
        };
        if (selectFlag === 'unselect') {
           
            Alltrainers.map((trainers)=>{
                // console.log(trainers)
                return trainers
              })
              count = 0
            //   console.log(count)
            dispatch(actions.unselectTrainer(props.trainers.id))
        };
      };

    //   if(!Alltrainers){
    //       return (<div>no trainer</div>)
    //   }
    //   else{
        return (
      
            <div className='todo-wrapper'>
              <table>
                <tbody>
                  <tr>
                    <td>Trainer name:  {props.trainers.name}</td>
                    <td></td>
                  </tr>
                  {/* <tr>
                    <td>Pokemon catched:</td>
                    <td>{props.trainers.pokemons[0].name}</td>
                    <td>{props.trainers.pokemons[0].url}</td>
                  </tr> */}
                  <tr>
                {props.trainers.pokemons && props.trainers.pokemons.map((poke)=>{

                return  <Link className='showlink' color="inherit" to={poke.url}>  <td>{poke.name}</td> </Link>

                })} 
                  </tr>
                  
                  <tr>
                    <td>
                    {!props.trainers.select && (
                      <button onClick={deleteTrainer}>Delete Trainer</button>
                      )}
                    {/* </td>
                    
                    <td> */}
                    <span></span>
                      {!props.trainers.select && (
                        <button onClick={() => selectTrainerToggle('select')}>
                          Select
                        </button>
                      )}
                      {props.trainers.select && (
                        <button onClick={() => selectTrainerToggle('unselect')}>
                          Unselect
                        </button>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <br/>
              <br/>
            </div>
          )
    //   }
  
}

export default Trainer