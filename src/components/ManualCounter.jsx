import {React, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

// Let's create a counter app that allows us to increment and decrement a number

const ManualCounter = (studentDetails) => {

  const location = useLocation();
  const name = location.state.name;
  const email = location.state.email;

  // Use State
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // This effect will run after the first render and after every update
    console.log("useEffect ran");
  })

  // Event Handling
  const incrementClick = () => {
    console.log("Increment clicked");
    setCount(count + 1);
  }

  // Event Handling
  const decrementClick = () => {
    console.log("Decrement clicked");
    setCount(count - 1);
  }

  // Conditional Rendering   --- The part with the ? and a :
  return (
    <div>
      {count >= 0 ? <h1>Counter is {count}</h1> : <h1>Counter is Negative</h1>} 

      <p>Welcome, <strong>{name}</strong>! </p>
      <p>Your email is: <strong>{email}</strong> </p>
      <button onClick={incrementClick}>Increment</button>
      <button onClick={decrementClick}>Decrement</button>
    </div>
  );
};

export default ManualCounter;
