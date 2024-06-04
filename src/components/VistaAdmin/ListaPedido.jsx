import axios from 'axios';
import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';

export const ListaPedido = () => {
  const [pedido, setPedido] = useState([]);
  const [estado, setEstado] = useState('Sin entregar');

  const getPedidos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/pedidos');
      console.log(response.data);
      setPedido(response.data);
    } catch (error) {
      console.error('Error al obtener pedido:', error);
    }
  };

  useEffect(() => {
    getPedidos();
  }, []);

  const pedidosFiltrados = pedido.filter(item => item.estado_pedido === estado);

  return (
    <>
      <div className="panel-pedido">
        <div className="box-estado-pedido">
          <Button onClick={() => setEstado('Sin entregar')}>Sin entregar</Button>
          <Button onClick={() => setEstado('En camino')}>En camino</Button>
          <Button onClick={() => setEstado('Entregados')}>Entregados</Button>
        </div>
        <div className='box-pedidos'>
          {pedidosFiltrados.map(item => (
            <div key={item.id} className="pedido-item">
              <p><strong>Fecha:</strong> {item.fecha}</p>
              <p><strong>Cliente:</strong> {item.nombre_cli} {item.apellido_cli}</p>
              <p><strong>DNI:</strong> {item.dni_cli}</p>
              <p><strong>Teléfono:</strong> {item.telefono_cli}</p>
              <p><strong>Correo:</strong> {item.correo_cli}</p>
              <p><strong>Departamento:</strong> {item.departamento_cli}</p>
              <p><strong>Distrito:</strong> {item.distrito_cli}</p>
              <p><strong>Dirección:</strong> {item.direccion_cli}</p>
              <p><strong>Referencia:</strong> {item.referencia_cli}</p>
              <p><strong>Mensaje:</strong> {item.mensaje_cli}</p>
              <p><strong>Producto:</strong> {item.producto}</p>
              <p><strong>Estado del Pedido:</strong> {item.estado_pedido}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
