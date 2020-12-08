import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //thunk es para trabajar promesas con Redux

//en el store simpre que se importa los Ducks, se tienen que llamar los Reducers

import pokeReducer from './PokeDucks'


const  rootReducer = combineReducers({
    pokemon: pokeReducer
    //usuarios: usuarioReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}