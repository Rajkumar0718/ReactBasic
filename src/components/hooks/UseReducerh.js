import React, { useReducer } from 'react';
import Tooltip from '@mui/material/Tooltip';

const UseReducerh = () => {
  // Initial state should be an object, not a number
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        // Corrected the update logic for INCREMENT
        return { count: state.count + 1 };

      case 'DECREMENT':
        // Corrected the update logic for DECREMENT
        return { count: state.count > 0 ? state.count - 1 : 0 };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>UseReducer {state.count}</h2>
      <br />
      <Tooltip title="Increment">
        {/* Updated dispatch action to use an object with type */}
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          style={{
            width: '5rem',
            height: '2rem',
            backgroundColor: 'coral',
            border: 'none',
            borderRadius: '.5rem',
            cursor: 'pointer',
          }}
        >
          Increment
        </button>
      </Tooltip>
      <Tooltip title="Decrement">
        {/* Updated dispatch action to use an object with type */}
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          style={{
            width: '5rem',
            height: '2rem',
            backgroundColor: 'coral',
            border: 'none',
            borderRadius: '.5rem',
            cursor: 'pointer',
            marginLeft: '1rem',
          }}
        >
          Decrement
        </button>
      </Tooltip>
      <p>The useReducer hook is an alternative to the useState hook when you have more complex state logic that involves multiple sub-values
        <br /><br />
        Here's a brief explanation of how useReducer works:
        <br /><br />
        1.Reducer Function: You provide a reducer function that takes the current state and an action as arguments and returns the new state. The reducer function is responsible for specifying how the state should change in response to different actions.
        const reducer=(state,action){ }
        <br /><br />
        2.Hook Usage:
        const [state, dispatch] = useReducer(reducer, initialState);
        <br /><br />
        The useReducer hook takes the reducer function and an initial state as arguments, and it returns the current state and a dispatch function. The dispatch function is used to send actions to the reducer, triggering state updates.
        <br /><br />
        3. Dispatching Actions:
        dispatch();
        <br /><br />
        To update the state, you dispatch actions to the reducer. The action is an object with a type property that specifies the type of operation to perform.
        <br /><br />
        In summary, the useReducer hook is beneficial when dealing with more complex state logic or when the state transitions depend on the previous state. It can make the code more organized and easier to manage in certain scenarios compared to using multiple useState calls.
      </p>
    </div>
  );
};

export default UseReducerh;
