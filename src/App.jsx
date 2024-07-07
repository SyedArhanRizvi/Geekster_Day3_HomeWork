import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Head'
import Hero from './components/Hero'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
function App() {
  

  return (
    <body>
    <Navbar></Navbar>
    <Hero></Hero>
    <Section1></Section1>
    <Section2></Section2>
    <footer className='footer'>
      <div className='footChild'><h1>Copyright-2006: Under Goverment of India, Art- 72A</h1></div>
      <div className='footChild2'><h1>Powered by: www.meer_sahab_110.com</h1></div>
    </footer>
    </body>
  )
}

export default App
