import React, { useContext, useEffect, useRef, useState } from 'react'
import { ClienteContext } from '../../context/ClienteContext'
import axios from 'axios';
import { Button } from 'primereact/button';
import Producto from "../VistaCliente/Producto.jsx";
import iconBolsa from "../../icons/bolsaCompra.png";
import { Link } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';

const Catalogo = () => {
  const { categoriaContext, carrito, addProducto, updateProducto } = useContext(ClienteContext);

  const [itemProducto, setItemProducto] = useState(null);
  const [visible, setVisible] = useState(false);

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
  const [productos, setProductos] = useState(null);
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

  const obtenerItemProducto = (item) => {
    setItemProducto(item);//Aca estoy llenado el objeto Producto en productoItem
    setVisible(true);
    console.log("producto a comprar", item);
  }
  const [idCarrito, setIdCarrito] = useState(null);
  useEffect(() => {
    if (carrito && itemProducto) {
      const productoEnCarrito = carrito.find(item => item.id_producto === itemProducto.id);
      if (productoEnCarrito) {
        setIdCarrito(productoEnCarrito.id);
        setCantidad(productoEnCarrito.cantidad);
      } else {
        setIdCarrito(null);
        setCantidad(1);
      }
    }
  }, [carrito, itemProducto]);

  const toast = useRef(null);
  const showToast = (type, title, detail) => {
    toast.current.show({
      severity: type,
      summary: title,
      detail: detail,
      life: 3000,
    });
  };

  const [cantidad, setCantidad] = useState(1);

  const agregarCarrito = (producto) => {
    const newProducto = {
      id: producto.id || Date.now(), // Usar idCarrito si existe, de lo contrario generar uno nuevo
      id_producto: producto.id,
      nombre: producto.nombre,
      image: producto.imagen,
      precio: producto.precio,
      cantidad,
      subtotal: producto.precio * cantidad
    };

    if (producto.id === null) {
      addProducto(newProducto);
      showToast('success', 'Producto añadido', `${itemProducto?.nombre} ha sido añadido al carrito`);
    } else {
      updateProducto(idCarrito, newProducto);
      showToast('success', 'Producto actualizado', `${itemProducto?.nombre} ha sido actualizado en el carrito`);
    }

  };


  return (
    <>
      <Toast className='toast-correct' ref={toast} />
      <div className='panel-oferta'>
        <div className='titulo-de-categoria'><h1 style={{ marginTop: "20px", color: "blue" }}>{categoriaContext?.nombre} </h1></div>
        <div className='seccion-oferta'>
          {productosC != null && productosC.length > 0 ? (
            productosC.map((item) => {
              return (
                <div className='oferta-template' key={item.id}>
                  <div style={{ background: "#DDDDDD", padding: "5px" }}>
                    <img width="100px" src={item.url_imagen} alt="img-product" />
                  </div>
                  <div>
                    <h2> {item.nombre} </h2>
                    <h3> S/ {item.precio} </h3>
                    <h4> Categoría: {categoriaContext?.nombre} </h4>
                    <p> Cantidad disponible: {item.stock} </p>
                  </div>
                  <div className='btn-oferta'>
                    <Button onClick={() => obtenerItemProducto(item)} className='btn-ver'>
                      Ver
                    </Button>
                    <Link onClick={() => {obtenerItemProducto(item); agregarCarrito(item)}} to={'/compra'} className='btn-comprar'>Comprar</Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='no-hay-producto'>
              <img width={"300px"} src={iconBolsa} alt="icon" />
              <h1>Aún no hay productos en esta categoría</h1>
            </div>
          )}
        </div>

      </div>
      <Producto visible={visible} setVisible={setVisible} itemProducto={itemProducto} />


    </>
  )
}
export default Catalogo;
