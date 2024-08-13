import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import React, { useContext, useEffect, useRef, useState } from 'react';
import iconCarrito from '../../icons/carrito.png';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { ClienteContext } from '../../context/ClienteContext';

const Producto = ({ visible, setVisible, itemProducto }) => {

  const { carrito, addProducto, updateProducto } = useContext(ClienteContext);

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

  const agregarCarrito = () => {
    const newProducto = {
      id: idCarrito || Date.now(), // Usar idCarrito si existe, de lo contrario generar uno nuevo
      id_producto: itemProducto.id,
      nombre: itemProducto.nombre,
      image: itemProducto.imagen,
      precio: itemProducto.precio,
      cantidad,
      subtotal: itemProducto.precio * cantidad
    };

    if (idCarrito === null) {
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
      <Dialog
        className='dialog-producto'
        visible={visible}
        onHide={() => {
          setVisible(false);
          setIdCarrito(null);
          setCantidad(1);
        }}
        header={<h3> {itemProducto?.nombre} </h3>}
        >
        <div className='panel-producto'>

          <div className='body-dialog-producto'>
            <div style={{ padding: "5px" }} className='body-img-producto'>
              <img width={"150px"} src={itemProducto?.url_imagen} alt="img-producto" />
            </div>
            <div style={{ padding: "5px" }} className='body-dato-producto'>
              <div>
                <h2> Categoría: {itemProducto?.nombre_categoria} </h2>
                <p>Cantidad disponible: {itemProducto?.stock}</p>
                <h3>S/. {itemProducto?.precio} </h3>
                <p>Cantidad a pedir: </p>
                <input
                  min="1"
                  max={itemProducto?.stock}
                  className='input-ctd'
                  type='number'
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)} />
              </div>
              <div className='btn-oferta'>
                <Button
                  onClick={() => agregarCarrito()}
                  className='btn-ver'>
                  Añadir al Carrito
                  <img width={"30px"} src={iconCarrito} alt="botonCarrito" />
                </Button>
                <Button className='btn-comprar'>Finalizar Compra</Button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}
export default Producto;
