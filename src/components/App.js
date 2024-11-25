
import React from "react";
import './../styles/App.css';

const App = () => {
  const[count,setCount]=useState(0)
    const onCount=()=>{
      setCount(count+1)
    }
      return (
    <div>
        {/* Do not remove the main div */}
    <p>Button clicked {count} times>
    <button onClick={onCount}>Click me</button>
    </div>
  )
}

export default App
