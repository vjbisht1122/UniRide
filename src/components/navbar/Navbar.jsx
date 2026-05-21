import "./Navbar.css"
import logo from "../../assets/logo/logo.png"

function Navbar (){
  return (
    <nav className='navbar'>

    <div className='logo'>  
   <a href="/"><img src={logo} alt="UniRide Logo" /></a> 
    </div>
    
    <ul className='links'>
    
    <li>
    <a href="/">Home</a>
    </li>

    <li>
    <a  href="/about">About</a>
    </li>

    <li>
    <a href="/safety">Safety</a>
    </li>

    <li>
    <a href="/carrers">Carrers</a>
    </li>
    
    </ul>
    
    
    </nav>
  )
}

export default Navbar
