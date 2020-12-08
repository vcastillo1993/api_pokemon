import React from 'react'

import {useDispatch, useSelector} from 'react-redux';
import { obtenerPokemonesAccion} from '../redux/PokeDucks';

function Pokemones() {
  
    const dispatch = useDispatch();
    const {pokemones, loading, offset} = useSelector(store => store.pokemon)
    console.log(pokemones); 

    const siguiente =()=>{

        dispatch(obtenerPokemonesAccion(offset+20));
    }

    
    const anterior =()=>{

        dispatch(obtenerPokemonesAccion(offset-20));
    }

    const limpiar = ()=>{
        dispatch(obtenerPokemonesAccion(offset == null));
    }

    return (
    <div>
      lista de poquemones
      <button onClick ={() =>dispatch(obtenerPokemonesAccion(offset))}>has click</button>
      <button onClick ={siguiente}>siguiente</button>
      <button onClick ={anterior}>anterior</button>
      <button onClick ={limpiar}>limpiar</button>
      
       <ul>
          {
              pokemones.map(item =>(
              <li key = {item.name}> {item.name}</li>
              ))
          }
      </ul> 
    </div>
  );
}

export default Pokemones;
