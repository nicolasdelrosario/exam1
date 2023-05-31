import { useState, useEffect } from 'react';

const WeAreBestIn = () => {
  const [listaWeAreBestIn, setListaWeAreBestIn] = useState([]);

  useEffect(() => leerServicio(), []);

  const leerServicio = () => {
    const root = 'https://servicios.campus.pe/categorias.php';
    fetch(root)
      .then(response => response.json())
      .then(data => setListaWeAreBestIn(data)) 
  }

  const dibujarColumnas = () => (
    <div className="row">
      {listaWeAreBestIn.map(item => (
        <div className="col-lg-4 col-md-6 col-sm-12 p-5" key={item.idcategoria}>
          <h3 className='pb-3'>{ item.nombre }</h3>
          <p>{ item.descripcion }</p>
        </div>
      ))}
    </div>
  );

  return (
    <section id="we-are-best-in" className="padded">
      <div className="container text-center">
        <h2 className="title">We are Best in</h2>
        { dibujarColumnas() }
      </div>
    </section>
  )
}

export default WeAreBestIn