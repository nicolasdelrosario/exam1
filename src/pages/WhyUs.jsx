import { useEffect, useState } from "react";

const WhyUs = () => {
  const [whyUs, setWhyUs] = useState([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    const ruta = "https://servicios.campus.pe/servicioproductostodos.php";
    fetch(ruta)
      .then(response => response.json())
      .then(data => {
        setWhyUs(data);
      });
  };

  const dibujarCuadricula = () => (
    <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
      {whyUs.map((item) => (
        <div className="col" key={item.idproducto}>
          <div className="card">
            <img
              src={"https://servicios.campus.pe/fotos/" + item.foto}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <span className="card-text">Precio: {item.precio}</span>
              <p className="card-text">Detalle: {item.detalle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="why-us" className="padded">
      <div className="container">{dibujarCuadricula()}</div>
    </section>
  );
};

export default WhyUs;
