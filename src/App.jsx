import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Menu</h1>
        <h1>About</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
        <p>Oscuro Claro</p>
        <p>Idioma</p>
      </div>
      <div>ABOUT</div>
      <div>PROJECTS</div>
      <div>CONTACT</div>
      <div>FOOTER</div>
      
    </>
  )
}

export default App
