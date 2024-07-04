import axios from 'axios';
import { Button } from 'primereact/button';
import React, { useEffect, useRef, useState } from 'react';
import iconRed from '../../icons/red.png';
import iconGreen from '../../icons/verde.png';
import iconYellow from '../../icons/yellow.png';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Tag } from 'primereact/tag';

export const ListaPedido = () => {
  //para el toast 
  const toast = useRef(null);
  const showToast = (type, title, detail) => {
    toast.current.show({
      severity: type,
      summary: title,
      detail: detail,
      life: 3000,
    });
  };

  const [pedido, setPedido] = useState([]);
  const [estado, setEstado] = useState('Sin entregar');
  const [est, setEst] = useState("");

  //consts para mis dialogs
  const [visibleEye, setVisibleEye] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [itemPedido, setItemPedido] = useState(null);

  //jalar lista de pedidos
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
  //api de actualización de pedidossss
  const actualizarPedido = async () => {
    const fechaActual = new Date();
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const año = fechaActual.getFullYear();
    const horas = String(fechaActual.getHours()).padStart(2, '0');
    const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
    const segundos = String(fechaActual.getSeconds()).padStart(2, '0');
    const fechaFormateada = `${dia}/${mes}/${año}`;
    const horaFormateada = `${horas}:${minutos}:${segundos}`;

    const data =     
    {
      "fecha": `${fechaFormateada} - ${horaFormateada}`,
      "nombre_cli": itemPedido?.nombre_cli,
      "apellido_cli": itemPedido?.apellido_cli,
      "dni_cli": itemPedido?.dni_cli,
      "telefono_cli": itemPedido?.telefono_cli,
      "correo_cli": itemPedido?.correo_cli,
      "departamento_cli": itemPedido?.departamento_cli,
      "distrito_cli": itemPedido?.distrito_cli,
      "direccion_cli": itemPedido?.direccion_cli,
      "referencia_cli": itemPedido?.referencia_cli,
      "mensaje_cli": itemPedido?.referencia_cli,
      "producto": itemPedido?.producto,
      "metodo_pago": itemPedido?.metodo_pago,
      "banca_billetera": itemPedido?.banca_billetera,
      "estado_pedido": est
  }
  const id = itemPedido?.id;
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/pedidos/${id}`, data);
      console.log('Pedido actualizado:', response.data);
      getPedidos();
      showToast(
        "success",
        "Pedido Actualizado",
        `Se cambió el estado del pedido`
      );
    } catch (error) {
      console.error('Error al cambiar pedido:', error);
    }
  };

  //filtrar pedidos 
  const pedidosFiltrados = pedido.filter(item => item.estado_pedido === estado);

  const showCliente = (data) => {
    return (
      <><p>{data.nombre_cli} {data.apellido_cli}</p></>
    )
  }
  const butonEstado = (data) => {
    return (
      <>
        {data.estado_pedido == "Sin entregar" ?
          (
            <Tag style={{padding:"1px 5px"}} severity="danger" value="Sin Entregar"></Tag>
          )
          : data.estado_pedido == "En camino" ?
            (
              <Tag style={{padding:"1px 5px"}} severity="warning" value="En camino"></Tag>
            )
            : (
              <Tag style={{padding:"1px 5px"}} severity="success" value="Entregado"></Tag>
            )
        }
      </>
    )
  }
  const butonDetalle = (data) => {
    return (
      <>
        <Button onClick={() => { setVisibleEye(true); setItemPedido(data) }} className='btn-ojo'>
          <i className="pi pi-eye"></i>
        </Button>
      </>
    )
  }
  const acciones = (data) => {
    return (
      <div className='caja-update-delete'>
        <Button onClick={() => { setVisibleEdit(true); setItemPedido(data); setEst(data.estado_pedido)}} className='btn-edit'>
          <i className="pi pi-pencil"></i>
        </Button>
        <Button
          onClick={() => { setVisibleDelete(true); setItemPedido(data) }}
          disabled={data.estado_pedido == "Sin entregar"}
          className='btn-delete'>
          <i className="pi pi-trash"></i>
        </Button>
      </div>
    )
  }
  const [globalFilter, setGlobalFilter] = useState('');
  const getHeader = () => {
    return (
      <div style={{ padding: "5px", display: "flex", justifyContent: "end", alignItems: "center" }}>
        <i className="pi pi-search"></i>
        <InputText style={{ textAlign: 'left', padding: "5px", marginLeft: "10px" }}
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Buscar pedido" />
      </div>
    );
  };
  let header = getHeader();

  return (
    <>
     <Toast ref={toast} />
      <div className="panel-pedido">
        <div className="box-estado-pedido">
          <Tag className='tag-estado' onClick={() => setEstado('Sin entregar')} severity="danger" value="Sin Entregar"></Tag>
          <Tag className='tag-estado' onClick={() => setEstado('En camino')} severity="warning" value="En camino"></Tag>
          <Tag className='tag-estado' onClick={() => setEstado('Entregado')} severity="success" value="Entregado"></Tag>
        </div>
        <div className='box-pedidos'>
          <DataTable
            globalFilter={globalFilter}
            header={header}
            scrollable scrollHeight="300px"
            className="tabla-crud"
            paginator rows={4}
            value={pedidosFiltrados}
            tableStyle={{ minWidth: '50rem' }}>
            <Column className="column-crud" header="N° DE PEDIDO" field="id" ></Column>
            <Column className="column-crud" header="Cliente" body={(e) => showCliente(e)} ></Column>
            <Column className="column-crud" header="Fecha del pedido" field='fecha' ></Column>
            <Column className="column-crud" header="Estado del pedido" body={(e) => butonEstado(e)} ></Column>
            <Column className="column-crud" header="Detalles del pedido" body={(e) => butonDetalle(e)}  ></Column>
            <Column className="column-crud" header="Acciones" body={(e) => acciones(e)}  ></Column>
          </DataTable>
        </div>
        <Dialog
          className='dialog-create'
          visible={visibleEye}
          onHide={() => { setVisibleEye(false); setItemPedido(null) }}
          header={<h2>Detalles del pedido <i className="pi pi-receipt"></i></h2>}
          footer={<div className='footer-dialog-create'>
            <Button
              className='btn-cancelar-dialog'
              label='Cerrar'
              onClick={() => {
                setVisibleEye(false);
                setItemPedido(null);
              }}>
            </Button>
          </div>}
        >
          <br />
          <div className='box-detalles'>
            <p><span>Fecha :</span> {itemPedido?.fecha}</p>
            <p><span>Cliente :</span> {itemPedido?.nombre_cli} {itemPedido?.apellido_cli}</p>
            <p><span>N° de documento :</span> {itemPedido?.dni_cli}</p>
            <p><span>Teléfono :</span> {itemPedido?.telefono_cli}</p>
            <p><span>Correo :</span> {itemPedido?.correo_cli}</p>
            <p><span>Departamento :</span> {itemPedido?.departamento_cli}</p>
            <p><span>Distrito :</span> {itemPedido?.distrito_cli}</p>
            <p><span>Dirección:</span> {itemPedido?.direccion_cli}</p>
            <p><span>Referencia :</span> {itemPedido?.referencia_cli}</p>
            <p><span>Mensaje adicional :</span> {itemPedido?.mensaje_cli}</p>
            <p><span>Producto :</span> {itemPedido?.producto}</p>
            <p><span>Método de pago:</span> {itemPedido?.metodo_pago}</p>
            <p><span>Entidad de recibo:</span> {itemPedido?.banca_billetera}</p>
            <p><span>Estado del pedido:</span> {itemPedido?.estado_pedido}</p>
          </div>
          <br />
        </Dialog>
        <Dialog
          className='dialog-create'
          style={{width:"500px"}}
          visible={visibleEdit}
          onHide={() => { setVisibleEdit(false); setItemPedido(null) }}
          header={<h2>Actualizar estado del pedido <i className="pi pi-receipt"></i></h2>}
          footer={<div className='footer-dialog-create'>
            <Button
              className='btn-cancelar-dialog'
              label='Cancelar'
              onClick={() => { setVisibleEdit(false); setItemPedido(null) }}>
            </Button>
            <Button className='btn-crear-dialog' label='Actualizar'
              onClick={() => { setVisibleEdit(false); actualizarPedido();  setItemPedido(null) }}>
            </Button>
          </div>}
        >
          <br />
          <div className='box-detalles'>
            <p><span>Fecha :</span> {itemPedido?.fecha}</p>
            <p><span>Cliente :</span> {itemPedido?.nombre_cli} {itemPedido?.apellido_cli}</p>
            <p><span>N° de documento :</span> {itemPedido?.dni_cli}</p>
            <p><span>Teléfono :</span> {itemPedido?.telefono_cli}</p>
            <p><span>Correo :</span> {itemPedido?.correo_cli}</p>
            <p><span>Departamento :</span> {itemPedido?.departamento_cli}</p>
            <p><span>Distrito :</span> {itemPedido?.distrito_cli}</p>
            <p><span>Dirección:</span> {itemPedido?.direccion_cli}</p>
            <p><span>Referencia :</span> {itemPedido?.referencia_cli}</p>
            <p><span>Mensaje adicional :</span> {itemPedido?.mensaje_cli}</p>
            <p><span>Producto :</span> {itemPedido?.producto}</p>
            <p><span>Método de pago:</span> {itemPedido?.metodo_pago}</p>
            <p><span>Entidad de recibo:</span> {itemPedido?.banca_billetera}</p>
            <div style={{display:"flex", alignItems:"center", flexDirection:"row", gap:"10px"}}>
            <p><span>Estado del pedido:</span><Tag style={{padding:"1px 5px"}} severity={est == "Sin entregar" ? "danger" : est == "En camino" ? "warning" : "success"} value={est}></Tag></p>
            <select required className='tip_document' name="tipo_documento" id="document-select" onChange={(e) => setEst(e.target.value)}>
                  <option className='option-document' value={itemPedido?.estado_pedido} >Cambia el estado del pedido</option>
                  <option className='option-document' value="Sin entregar" >Sin entregar</option>
                  <option className='option-document' value="En camino" >En camino</option>
                  <option className='option-document' value="Entregado" >Entregado</option>
                </select>
            </div>
            
          </div>
          <br />
        </Dialog>
        <Dialog visible={visibleDelete} onHide={() => { setVisibleDelete(false); setItemPedido(null) }}>
          <div>
            <p>hhh</p>
          </div>
        </Dialog>
      </div>
    </>
  );
};
