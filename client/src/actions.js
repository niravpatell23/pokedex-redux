const addTrainer = (name) =>({
    type: 'CREATE_TRAINER',
    payload:{
        name:name
    }
})

const deleteTrainer = (id) =>({
    type: 'DELETE_TRAINER',
    payload:{
        id:id
    }
})

const selectTrainer = (id) => ({
    type: 'SELECT_TRAINER',
    payload: {id: id}
  });
  
  const unselectTrainer = (id) => ({
    type: 'UNSELECT_TRAINER',
    payload: {id: id}
  });

  const catchPokemon = (pokename,trainerId,url) => ({
    type: 'Catch_Pokemon',
    payload: {
        pokename: pokename,
        trainerId:trainerId,
        url:url
    }
  });

  const releasePokemon = (pokename,trainerId) => ({
    type: 'Release_Pokemon',
    payload: {
        pokename: pokename,
        trainerId:trainerId
    }
  });



module.exports = {
    addTrainer,
    deleteTrainer,
    selectTrainer,
    unselectTrainer,
    catchPokemon,
    releasePokemon
}