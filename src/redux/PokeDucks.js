import axios from 'axios';


// constantes o estados 
//son los encargados de recibir como parametros todos los elementos contenidos en la api
const dataInicial = {
    pokemones: [],
    loading: false,
    offset:0
}

//estos son los types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO';
const ACTUALIZAR_OFFSET = 'ACTUALIZAR_OFFSET';


//reucer
//es la encargada de aceptar la lista de elementos contenidos en la api
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return{...state, pokemones:action.payload}
        case ACTUALIZAR_OFFSET:
            return{...state, offset: action.payload}    
        default:
            return state
        
    }
}


//acciones
// es la encargada de consumir la api
export const obtenerPokemonesAccion = (offset) => async (dispatch, setState) => {
    try {
        console.log("OFFSET", offset)
        console.log("setState", setState)
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type:OBTENER_POKEMONES_EXITO,
            payload:res.data.results //el payload es quien almacena la respuesta de los pokemones que se desean de la api
        })

        dispatch({
            type:ACTUALIZAR_OFFSET,
            payload:offset //
        })

    } catch (error) {
        console.log(error);
    }
}