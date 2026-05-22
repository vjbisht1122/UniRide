import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
    </>
  )
}

export default App
