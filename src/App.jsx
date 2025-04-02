import './index.css'
import { useState } from "react"
import { Card } from './components/Card'
function App() {
  
  const [counter, setCounter] = useState(10)
  const adding = () => {
    setCounter(counter + 1);
  }
  const sub = () => {
    setCounter((prev) => prev - 1); // batching --> recoilation
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
  }
  return (
    <>
      <div className='w-max h-screen items-center justify-center'>
        <h1 className='text-3xl bg-green-500 p-3 rounded-md'>
          Hai Siva
        </h1>
        <Card username='siva' rollno='123456'/>
        <Card myarr={[12345]} myarr1={{a:1,b:2,c:3}}/>
      </div>
    </>
  )
}

export default App
