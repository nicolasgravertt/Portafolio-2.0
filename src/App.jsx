import "./app.scss";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
      </section>
      <section id="Servicios">Parallax</section>
      <section id="">Services</section>
      <section id="Portafolio">Parallax</section>
      <section id="">Portfolio 1</section>
      <section id="">Portfolio 2</section>
      <section id="">Portfolio 3</section>
      <section id="Contacto">Contact</section>
    </div>
  );
}

export default App;
