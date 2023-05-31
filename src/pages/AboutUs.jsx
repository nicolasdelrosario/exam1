import { useState, useEffect } from "react"

const AboutUs = () => {
  const [AboutUs, setAboutUs] = useState([]);

  useEffect(() => leerServicio(), []);

  const leerServicio = () => {
    const root = 'https://servicios.campus.pe/servicioclientes.php';
    fetch(root)
      .then(response => response.json())
      .then(data => setAboutUs(data))
  };

  const dibujarTabla = () => (
    AboutUs.map(item => (
      <tr key={item.idcliente}>
        <th className="font-weight-normal">{item.empresa}</th>
        <th className="font-weight-normal">{item.nombres}</th>
        <th className="font-weight-normal">{item.cargo}</th>
        <th className="font-weight-normal">{item.direccion}</th>
        <th className="font-weight-normal">{item.telefono}</th>
      </tr>
    ))
  );

  return (
    <table className="table container">
      <thead>
        <tr>
          <th className="font-weight-bold">Empresa</th>
          <th className="font-weight-bold">Nombre</th>
          <th className="font-weight-bold">Cargo</th>
          <th className="font-weight-bold">Dirección</th>
          <th className="font-weight-bold">Teléfono</th>
        </tr>
      </thead>
      <tbody>
        { dibujarTabla() }
      </tbody>
    </table>
  )
}

export default AboutUs