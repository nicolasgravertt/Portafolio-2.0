import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Servicios">
        <Parallax type="servicios" />
      </section>
      <section id="">Services</section>
      <section id="Portafolio">
        <Parallax type="portafolio" />
      </section>
      <section id="">Portfolio 1</section>
      <section id="">Portfolio 2</section>
      <section id="">Portfolio 3</section>
      <section id="Contacto">Contact</section>
    </div>
  );
}

export default App;
