import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if(counter===20){
      
      setCounter(counter=20)
    
    }
    else{
    counter = counter + 1;
    setCounter(counter);
    }
  };
  const removeValue = () => {
    if(counter===0){
     
      setCounter(counter=0)
    }
    else{
      counter=counter-1
      setCounter(counter)
    }
  };

  return (
    <>
      <h1>chai or me</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Increase value</button>
      <br></br>
      <button onClick={removeValue}>decrease value</button>
    </>
  );
}

export default App;
