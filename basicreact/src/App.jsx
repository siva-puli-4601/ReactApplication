import './index.css' 
import { useState } from "react"
function App() {
  const [counter,setCounter]=useState(10)
  const adding=()=>
  {
    setCounter(counter+1);
  }
  const sub=()=>
  {
    setCounter((prev)=>prev-1); // btching --> recoilation
    setCounter((prev)=>prev-1);
    setCounter((prev)=>prev-1);
    setCounter((prev)=>prev-1);
  }
  return (
    <>
      <div>
        <h1 className="flex text-3xl bg-green-500 underline p-4 rounded-md">Counter: {counter}</h1>
        <button onClick={adding}>ADD</button>{" "}
        <button onClick={sub}>SUB</button>
      </div>
    </>
  )
}

export default App
