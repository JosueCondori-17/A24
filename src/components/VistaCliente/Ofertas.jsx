import axios from 'axios';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

  const Ofertas = () => {
  //TRAER OFERTAS
  const [ofertas, setOfertas] = useState([
    {
      "id": 0,
      "nombre": "",
      "imagen": null,
      "precio": 0,
      "descripcion": "",
      "stock": 0,
    }
  ]);

  const getOfertas = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/ofertas');
      console.log(response.data);
      setOfertas(response.data);
    }
    catch (error) {
      console.error('Error al obtener ofertas:', error);
    }
  };

  useEffect(() => {
    getOfertas();
  }, []);


  return (
    <>
      <div className='panel-oferta'>
        <h1 style={{ marginTop: "20px", color: "blue" }}>Ofertas A24 Store</h1>
        <div className='seccion-oferta'>
          {ofertas.map((item) => {
            return (
              <div className='oferta-template' key={item.id}>
                <div style={{ background: "#DDDDDD", padding: "5px" }}>
                  <img width="80px" src={item.imagen} alt="img-product" />
                </div>
                <div>
                  <h2> {item.nombre} </h2>
                  <h4> {item.descripcion} </h4>
                  <h3> S/ {item.precio} </h3>
                  <p> Cantidad disponible: {item.stock} </p>
                </div>
                <div className='btn-oferta'>
                  <Button className='btn-ver' >Ver</Button>
                  <Link to={'/tutiendita/compra'} className='btn-comprar'>Comprar</Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}
export default Ofertas;