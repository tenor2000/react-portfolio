import { useState } from 'react'
import { Element } from 'react-scroll'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import ContactModal from './components/Contact';
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <>
      <Header/>
      <Element name="Home" >
        <Hero/>
      </Element>
      <Element name="Projects" >
        <Projects/>
      </Element>
      <Element name="About" >
        <About/>
      </Element>
      <Element name="Resume" >
        <Resume/>
      </Element>
      <Element name="Contact">
        <ContactModal/>
      </Element>
      <Footer />
    </>
  )
}

export default App
