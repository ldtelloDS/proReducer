import React, { useReducer, useState } from "react";

const TYPES = {
  INCREMENTO: "INC",
  INCREMENTO_5: "INC_5",
  DECREMENTO: "DEC",
  DECREMENTO_5: "DEC_5",
  RESET: "RESET",
};

const initialState = { contador: 0 };

const init=(initialState)=>{
    return {
        contador: initialState.contador+100,
    }
}

function reducer(state, action) {
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
      return { contador: 0 };

    default:
      return state;
  }
}

export const ContadorMejorado = () => {
  //const [contador, setContador] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState,init);

  const Sumar = () => {
    dispatch({ type: TYPES.INCREMENTO });
  };
  const Restar = () => {
    dispatch({ type: TYPES.DECREMENTO });
  };

  const Sumar_5 = () => {
    dispatch({ type: TYPES.INCREMENTO_5, payload: 5 });
  };
  const Restar_5 = () => {
    dispatch({ type: TYPES.DECREMENTO_5, payload: 5 });
  };

  const Reset = () => {
    dispatch({ type: TYPES.RESET });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Contador Mejorado</h3>
      <nav>
        <button onClick={Sumar_5}>+5</button>
        <button onClick={Sumar}>+</button>
        <button onClick={Reset}>0</button>
        <button onClick={Restar}>-</button>
        <button onClick={Restar_5}>-5</button>
      </nav>
      <h4>{state.contador}</h4>
    </div>
  );
};
