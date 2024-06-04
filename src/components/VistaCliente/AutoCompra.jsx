import axios from 'axios';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useContext, useRef, useState, useEffect } from 'react';
import iconDelete from '../../icons/delete.png';
import iconRefrescar from '../../icons/refrescar.png';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { ClienteContext } from '../../context/ClienteContext';
import { Link } from 'react-router-dom';

const AutoCompra = () => {
  const { carrito, updateProducto, deleteProducto, totalCarrito } = useContext(ClienteContext);
  const toast = useRef(null);
  const showToast = (type, title, detail) => {
    toast.current.show({
      severity: type,
      summary: title,
      detail: detail,
      life: 3000,
    });
  };

  const eliminarProducto = (data) => {
    deleteProducto(data.id);
    showToast(
      "success",
      "Producto eliminado ",
      `Se quitó ${data.nombre} del carrito`
    );
  };

  const actualizarProducto = (data, cantidad) => {
    const producto = {
      id: data.id, // Usar idCarrito si existe, de lo contrario generar uno nuevo
      id_producto: data.id_producto,
      nombre: data.nombre,
      image: data.image,
      precio: data.precio,
      cantidad: cantidad,
      subtotal: data.precio * cantidad
    };
    updateProducto(producto.id, producto);
    console.log("Carrito actualizado");
  };

  const mostrarProducto = (data) => {
    return (
      <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
        <img width={"40px"} src={data.image} alt="imgProducto" />
        <p>{data.nombre}</p>
      </div>
    );
  };

  const mostrarPrecio = (data) => {
    return <p>S/ {data.precio}</p>;
  };

  const mostrarCantidad = (data) => {
    const [cantidad, setCantidad] = useState(parseInt(data?.cantidad));

    useEffect(() => {
      if (cantidad > 0) {
        actualizarProducto(data, cantidad);
      }
    }, [cantidad]); // Llamar actualizarProducto solo cuando cantidad cambie y sea mayor a 0

    return (
      <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", width: "100%" }}>
        <button className='btn-sumar' onClick={() => setCantidad(prevCantidad => Math.max(1, prevCantidad - 1))}>-</button>
        <p>{cantidad}</p>
        <button className='btn-sumar' onClick={() => setCantidad(prevCantidad => prevCantidad + 1)}>+</button>
      </div>
    );
  };

  const mostrarSubTotal = (data) => {
    return <p>S/ {data.subtotal}</p>;
  };

  const butonsAccion = (data) => {
    return (
      <button className='btn-quitar' onClick={() => eliminarProducto(data)}>X</button>
    );
  };

  return (
    <>
      <Toast className='toast-correct' ref={toast} />
      <div className={totalCarrito != 0 ? "caja-crud" : "caja-crud-2"}>
        <div className='head-total-carrito'>
          <div className='head-total-precio'> <p>TOTAL DEL CARRITO:  S/ {totalCarrito}</p></div>
          <div className='head-finaliza-compra'>
            <Link className="link-compra" to={'/compra'}>FINALIZAR COMPRA</Link>
          </div>
        </div>
        <div className='tabla'>
          <DataTable className="tabla-crud" value={carrito} tableStyle={{ minWidth: '50rem' }}>
            <Column className="column-crud" header="PRODUCTO" body={(e) => mostrarProducto(e)}></Column>
            <Column className="column-crud" header="PRECIO" body={(e) => mostrarPrecio(e)}></Column>
            <Column className="column-crud" header="CANTIDAD" body={(e) => mostrarCantidad(e)}></Column>
            <Column className="column-crud" header="SUBTOTAL" body={(e) => mostrarSubTotal(e)}></Column>
            <Column className="column-crud" body={(e) => butonsAccion(e)}></Column>
          </DataTable>
        </div>
      </div>

    </>
  );
};

export default AutoCompra;
