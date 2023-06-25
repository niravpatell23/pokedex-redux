import {v4 as uuid} from 'uuid';
const initalState = [
  
];

let copyState = null;
let index = 0;

const trainerReducer = (state = initalState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'CREATE_TRAINER':
      console.log('payload', payload);
      return [...state, {id: uuid(), name: payload.name,pokemons:[]}];

    case 'DELETE_TRAINER':
      copyState = [...state];
      index = copyState.findIndex((x) => x.id === payload.id);
      copyState.splice(index, 1);
      return [...copyState];

      case 'SELECT_TRAINER':
      copyState = [...state];
      index = copyState.findIndex((x) => x.id === payload.id);
      copyState[index].select = true;
      return [...copyState];

    case 'UNSELECT_TRAINER':
      copyState = [...state];
      index = copyState.findIndex((x) => x.id === payload.id);
      copyState[index].select = false;
      return [...copyState];

      case 'Catch_Pokemon':
        copyState = [...state];
        index = copyState.findIndex((x) => x.id === payload.trainerId);
        let obj = {
          name:payload.pokename,
          url:payload.url
        }
        copyState[index].pokemons = [...copyState[index].pokemons,obj];
        return [...copyState];

        case 'Release_Pokemon':
        copyState = [...state];
        index = copyState.findIndex((x) => x.id === payload.trainerId);
        
        // copyState[index].pokemons = [...copyState[index].pokemons,];
        const pokename = payload.pokename
        let tempArr = [...copyState[index].pokemons];
        let finArr = tempArr.filter(({name})=>name !== pokename);
        copyState[index].pokemons = finArr;
        return [...copyState];

    default:
      return state;
  }
};

export default trainerReducer;