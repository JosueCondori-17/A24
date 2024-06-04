import React, { useContext, useEffect, useState } from 'react'
import { ClienteContext } from '../../context/ClienteContext'
import axios from 'axios';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import Producto from "../VistaCliente/Producto.jsx";


  const Catalogo = () => {
  const { categoriaContext } = useContext(ClienteContext);

  const [productoItem, setProductoItem] = useState(null);
  const [visible, setVisible]= useState(false);

  const [productosC, setProductosC] = useState([
    {
      "id": 0,
      "id_categoria": 0,
      "nombre": "",
      "precio": 0,
      "stock": 0,
      "imagen": ""
    }
  ]);
  //TRAER PRODUCTOS
  const [productos, setProductos] = useState([
    {
      "id": 0,
      "id_categoria": 0,
      "nombre": "",
      "precio": 0,
      "stock": 0,
      "imagen": ""
    }
  ]);
  const getProducto = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/productos');
      console.log("Jalando los productos", response.data);
      setProductos(response.data);
    }
    catch (error) {
      console.error('Error al obtener Productos:', error);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);
  useEffect(() => {
    if (productos) {
      const productosFiltrados = productos.filter(item => item.id_categoria === categoriaContext.id);
      setProductosC(productosFiltrados);//aca estoy metiendo los productos filtrados
      console.log("productos filtradossss: ", productosC);
    }
  }, [categoriaContext, productos]);

  const obtenerItemProducto =(item)=>{
    setProductoItem(item);//Aca estoy llenado el objeto Producto en productoItem
    setVisible(true);
  }


  return (
    <>
      <div className='panel-oferta'>
        <h1 style={{ marginTop: "20px", color: "blue" }}>Catálogo {categoriaContext?.nombre} </h1>
        <div className='seccion-oferta'>
          {productosC.map((item) => {
            return (
              <div className='oferta-template' key={item.id}>
                <div style={{ background: "#DDDDDD", padding: "5px" }}>
                  <img width="80px" src={item.imagen} alt="img-product" />
                </div>
                <div>
                  <h2> {item.nombre} </h2>
                  <h3> S/ {item.precio} </h3>
                  <h4> Categoría: {categoriaContext?.nombre} </h4>
                  <p> Cantidad disponible: {item.stock} </p>
                </div>
                <div className='btn-oferta'>
                  <Button onClick={()=>obtenerItemProducto(item)}  className='btn-ver' >
                    Ver</Button>
                  <Button className='btn-comprar'>Comprar</Button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
      <Producto visible={visible} setVisible={setVisible} itemProducto={productoItem} />

      
    </>
  )
}
export default Catalogo;
