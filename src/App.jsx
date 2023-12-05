import './App.css'
import Navbar from './Components/Navbar';
import About from "./Components/About"



function App() {

  return (
    <>
      <div className='bg-green'>
        <Navbar />
        <About />
        <h1>Projects</h1>
        <h1>Contact</h1>
        <p>Oscuro Claro</p>
        <p>Idioma</p>
      </div>

      <div>ABOUT</div>
      <div>PROJECTS</div>
      <div>Skills</div>
      <div>Estudios</div>
      <div>CONTACT</div>
      <div>FOOTER</div>
      
    </>
  )
}

export default App
