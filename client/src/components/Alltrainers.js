import React from 'react'
import Addtrainer from './Addtrainer'
import Trainer from './Trainer'
import {useState} from 'react'
import {useSelector} from 'react-redux'


function Alltrainers() {
  const [addBtnToggle,setBtnToggle] =useState(false)

  const Alltrainers = useSelector((state)=>state.trainers)
  
  // console.log(Alltrainers)
  return (

    <div>

    <button onClick={()=> setBtnToggle(!addBtnToggle)}>Add a trainer</button>
    <br/>
    <br/>
    {addBtnToggle && <Addtrainer/>}
    <br/>
    <br/>
    {Alltrainers.map((trainers)=>{
      // console.log(trainers)
      return <Trainer key={trainers.id} trainers={trainers}/>
    })}
    
    </div>
    
  )
}

export default Alltrainers