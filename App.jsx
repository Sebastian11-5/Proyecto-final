
import { useState } from "react";
import "./App.css";

// COMPONENTE 1: HEADER
function Header() {
  return (
    <header>
      <h1>
        INCOLMOTOS<br />
        <span>YAMAHA</span>
      </h1>

      <nav>
        <a href="#servicios">OTROS ENLACES</a>
        <a href="#contacto">CONTACTO</a>
      </nav>
    </header>
  );
}

// COMPONENTE 2: MAIN
function Main() {
  const [seleccionado, setSeleccionado] = useState(null);

  const tarjetas = [
    {
      titulo: "Yamaha Motor",
      descripcion: "Descubre nuestras motocicletas, diseños modernos y tecnología para cada camino.",
      detalle: "Yamaha ofrece motocicletas con tecnología, innovación y diferentes estilos para disfrutar de cada recorrido."
    },
    {
      titulo: "Modelos Deportivos",
      descripcion: "Potencia, velocidad y estilo para quienes buscan nuevas experiencias.",
      detalle: "Conoce modelos deportivos diseñados para ofrecer rendimiento, comodidad y una experiencia emocionante."
    },
    {
      titulo: "Servicios",
      descripcion: "Conoce las opciones de mantenimiento y cuidado para tu motocicleta.",
      detalle: "Encuentra servicios de mantenimiento, revisión y cuidado para conservar tu motocicleta en buenas condiciones."
    },
    {
      titulo: "Sobre Nosotros",
      descripcion: "Conoce nuestra pasión por las motos y nuestro compromiso con los clientes.",
      detalle: "Somos una página académica dedicada a presentar información sobre el mundo de las motocicletas Yamaha."
    }
  ];

  return (
    <main className="principal">

      <section className="mensaje">
        <h2>Reach New Levels</h2>
        <p>Descubre la emoción de conducir.</p>
      </section>

      <section className="secciones" id="servicios">

        {tarjetas.map((tarjeta, index) => (
          <article className="tarjeta" key={index}>
            <h3>{tarjeta.titulo}</h3>
            <p>{tarjeta.descripcion}</p>

            <button onClick={() => setSeleccionado(tarjeta)}>
              CONOCER MÁS
            </button>
          </article>
        ))}

      </section>

      {seleccionado && (
        <div className="modal">
          <div className="modal-contenido">

            <button
              className="cerrar"
              onClick={() => setSeleccionado(null)}
            >
              ✕
            </button>

            <h2>{seleccionado.titulo}</h2>
            <p>{seleccionado.detalle}</p>

            <button onClick={() => setSeleccionado(null)}>
              CERRAR
            </button>

          </div>
        </div>
      )}

    </main>
  );
}

// COMPONENTE 3: FOOTER
function Footer() {
  return (
    <footer id="contacto">
      <h3>Información de contacto</h3>
      <p>Correo: contacto@ejemplo.com</p>
      <p>Teléfono: 300 000 0000</p>
      <p>Medellín, Colombia</p>
      <p>© 2026 Mundo Motor | Página de práctica académica</p>
    </footer>
  );
}

// COMPONENTE PRINCIPAL APP
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
