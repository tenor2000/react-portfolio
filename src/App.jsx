import { Element } from "react-scroll";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import DevStack from "./sections/DevStack";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Resume from "./sections/Resume";
import ContactModal from "./sections/Contact";
import Footer from "./sections/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Element name="Home">
        <Hero />
      </Element>
      <Element name="DevStack">
        <DevStack />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Resume">
        <Resume />
      </Element>
      <Element name="Contact">
        <ContactModal />
      </Element>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
