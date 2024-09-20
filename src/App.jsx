import { useState } from 'react'
import { Element } from 'react-scroll'
import TextField from '@mui/material/TextField'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import ContactModal from './components/Contact';
import Footer from './components/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: 'white',  
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'gray', 
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'lightgray',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'gray',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white',
            '&.Mui-focused': {
              color: 'white'
            },
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Element name="Home" >
        <Hero/>
      </Element>
      <Element name="DevStack" >
        <TechStack/>
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
    </ThemeProvider>
  )
}

export default App
