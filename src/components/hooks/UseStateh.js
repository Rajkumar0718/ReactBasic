import React, { useState, createContext } from 'react'
import Tooltip from '@mui/material/Tooltip';
import UseEffecth from './UseEffecth';
import UseReducerh from './UseReducerh';
import UseMemoh from "./UseMemoh"
export const userContext = createContext();  // this is the syntax for usecontext
const UseStateh = () => {
  const [count, setcount] = useState(0);  //this the syntax
  const increment = () => {
    setcount(() => count + 1)
  }
  const decrement = () => {
    setcount(() => count - 1)
  }
  return (
    <div>
      <h2>UseState</h2>
      <p>
        count:{count}
      </p>
      <Tooltip title="increment">
        <button onClick={increment} style={{ width: "5rem", height: "2rem", backgroundColor: "coral", border: "none", borderRadius: ".5rem", cursor: "pointer" }} >increment</button>
      </Tooltip>
      <Tooltip title="decrement">
        <button onClick={decrement} style={{ width: "5rem", height: "2rem", backgroundColor: "coral", border: "none", borderRadius: ".5rem", cursor: "pointer", marginLeft: "1rem" }} >decrement</button>
      </Tooltip>
      <p> usestates are used in funtional component can now have local state without needing to be converted in class componenet</p>

      <userContext.Provider value={count}>  {count < 5 && <UseEffecth />}</userContext.Provider>
      <UseReducerh></UseReducerh>
      <UseMemoh></UseMemoh>

    </div>
  )
}
export default UseStateh


// usestates are used in funtional component can now have local state without needing to be converted in class componenet
