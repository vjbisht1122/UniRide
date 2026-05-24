import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Service from './components/servic/Service'
import Offer from './components/offer/Offer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <Service />
     <Offer />
    </>
  )
}

export default App
