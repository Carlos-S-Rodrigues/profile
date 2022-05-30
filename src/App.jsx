import { useState } from 'react'
import './index.css'
import NavHeader from './components/NavHeader/NavHeader'
import HeroSection from './components/HeroSection/heroSection'
import AboutSection from './components/AboutSection/AboutSection'

function App() {
  return (
    <div className="App">
      <NavHeader />
      <HeroSection />
      <AboutSection />
    </div>
  )
}

export default App
