import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className='text-3xl font-bold bg-green-400'> hello world</p>
      </div>
    </>
  )
}

export default App
