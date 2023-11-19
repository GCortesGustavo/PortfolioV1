import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>NAVBAR</div>
      <div>ABOUT</div>
      <div>PROJECTS</div>
      <div>CONTACT</div>
      <div>FOOTER</div>
      <h1 className='text-xl bg-black text-cyan-400'>Welcome to my portfolio Probando un cambio</h1>

    </>
  )
}

export default App
