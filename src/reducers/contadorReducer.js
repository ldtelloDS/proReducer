import { TYPES } from "../actions/contadorActions";


export const contadorInitialState = { contador: 0 };

export const contadorInit=(initialState)=>{
    return {
        contador: initialState.contador+100,
    }
}



export function contadorReducer(state, action) {
    switch (action.type) {
      case TYPES.INCREMENTO:
        return { contador: state.contador + 1 };
      case TYPES.INCREMENTO_5:
        return { contador: state.contador + action.payload };
  
      case TYPES.DECREMENTO:
        return { contador: state.contador - 1 };
      case TYPES.DECREMENTO_5:
        return { contador: state.contador - action.payload };
  
        case TYPES.RESET:
            console.log(contadorInitialState);
        return contadorInitialState;
  
      default:
        return state;
    }
  }