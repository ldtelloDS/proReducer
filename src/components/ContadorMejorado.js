import React, { useReducer } from "react";
import {
  contadorInit,
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";
import { TYPES } from "../actions/contadorActions";

export const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

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
