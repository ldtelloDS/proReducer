import { Contador } from "./components/Contador";
import { ContadorMejorado } from "./components/ContadorMejorado";

function App() {
  return (
    <div>
      <h1>useReducers</h1>
      <Contador/>
      <br/>
      <ContadorMejorado/>
    </div>
  );
}

export default App;
