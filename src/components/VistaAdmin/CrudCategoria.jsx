import React, { useEffect, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import { Button } from 'primereact/button';
import iconCrear from '../../icons/crear.png';
import iconEditar from '../../icons/editar.png';
import iconEliminar from '../../icons/eliminar.png';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

export const CrudCategoria = () => {
  const toast = useRef(null);
  const showToast = (type, title, detail) => {
    toast.current.show({
      severity: type,
      summary: title,
      detail: detail,
      life: 3000,
    });
  };
  //TRAER CATEGORIAS 
  const [categoria, setCategoria] = useState([
    {
      "id": 0,
      "nombre": ""
    }
  ]);

  const getCategorias = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/categorias');
      console.log(response.data);
      setCategoria(response.data);
    }
    catch (error) {
      console.error('Error al obtener categorías:', error);
    }
  };

  useEffect(() => {
    getCategorias();
  }, []);

  //CRUD- CREAR
  const [visible, setVisible] = useState(false);
  const [nombreCategoria, setNombreCategoria] = useState("");
  const [nameCat, setNameCat] = useState("");
  const [idCategoria, setIdCategoria] = useState(0);

  const crearCategoria = async () => {
    const data =
    {
      "nombre": nombreCategoria
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/categorias', data);
      console.log('Categoría creada:', response.data);
      getCategorias();
      showToast(
        "success",
        "Categoría Creada",
        `Se creó categoría ${nombreCategoria} correctamente`
      );
    } catch (error) {
      console.error('Error al crear categoría:', error);
    }

  }
  //CRUD - EDITAR
  const [visible2, setVisible2] = useState(false);
  const actualizarCategoria = async () => {
    const id = idCategoria;
    const data =
    {
      "nombre": nombreCategoria
    }
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/categorias/${id}`, data);
      console.log('Categoría actualizada:', response.data);
      getCategorias();
      showToast(
        "success",
        "Categoría Actualizada",
        `Se actualizó categoría ${nombreCategoria} correctamente`
      );
    } catch (error) {
      console.error('Error al actualizar categoría:', error);
    }
  }
  //CRUD - DELETE
  const [visibleDelete, setVisibleDelete] = useState(false);
  const deleteCategoria = async () => {
    const id = idCategoria;
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/categorias/${id}`);
      console.log('Categoría Eliminada:', response.data);
      getCategorias();
      showToast(
        "success",
        "Categoría Eliminada",
        `Se eliminó categoría ${nombreCategoria} correctamente`
      );
    } catch (error) {
      console.error('Error al eliminar categoría:', error);
    }
  }

  const butonsAccion = (data) => {
    return (
      <div className='caja-update-delete'>
        <Button
          onClick={() => {
            setVisible2(true); setIdCategoria(data.id); setNombreCategoria(data.nombre); setNameCat(data.nombre)
          }}
          className='btn-edit'>
          <img className='icon-crud' src={iconEditar} alt="btn-edit" /> Editar
        </Button>
        <Button
          onClick={() => {
            setVisibleDelete(true); setIdCategoria(data.id); setNombreCategoria(data.nombre)
          }}
          className='btn-delete'>
          <img className='icon-crud' src={iconEliminar} alt="btn-delete" /> Eliminar
        </Button>
      </div>
    )
  };


  return (
    <>
      <Toast className='toast-correct' ref={toast} />
      <div className="caja-crud-admin">
        <div className='crear-button'>
          <Button onClick={() => setVisible(true)} className='btn-create'> <img className='icon-crud' src={iconCrear} alt="btn-create" /> Crear Categoría</Button>
        </div>
        <div className='tabla'>
          <DataTable className="tabla-crud" value={categoria} tableStyle={{ minWidth: '50rem' }}>
            <Column className="column-crud" header="ID" field="id" ></Column>
            <Column className="column-crud" header="Nombre" field="nombre" ></Column>
            <Column className="column-crud" header="Acciones" body={(e) => butonsAccion(e)} ></Column>
          </DataTable>
        </div>
      </div>

      {/*DIALOG CREAR */}
      <Dialog className='dialog-create' visible={visible} onHide={() => { setVisible(false); setNombreCategoria("") }}>
        <div className='head-dialog-create'>
          <h1>Crear nueva categoría</h1>
          <p>Crea categorías para clasificar tus productos y facilitar la compra de los clientes.</p>
        </div>
        <div className='body-dialog-create'>
          <label>Nombre de categoría:</label>
          <InputText value={nombreCategoria}
            type='text'
            placeholder='Ingrese un nombre de categoría'
            onChange={(e) => setNombreCategoria(e.target.value)}
          > </InputText>
        </div>
        <div className='footer-dialog-create'>

          <Button
            className='btn-cancelar-dialog'
            label='Cancelar'
            onClick={() => {
              setVisible(false);
              setNombreCategoria("");
            }}>
          </Button>
          <Button className='btn-crear-dialog' label='Crear'
            onClick={() => { setVisible(false); crearCategoria(); setNombreCategoria("") }}>
          </Button>
        </div>
      </Dialog>

      {/*DIALOG EDITAR*/}
      <Dialog className='dialog-create' visible={visible2} onHide={() => { setVisible2(false); setNombreCategoria("") }}>
        <div className='head-dialog-create'>
          <h1>Actualizar categoría {nameCat}</h1>
          <p>Aquí puede actualizar tus categorías.</p>
        </div>
        <div className='body-dialog-create'>
          <label>Nombre de categoría:</label>
          <InputText value={nombreCategoria}
            type='text'
            placeholder='Ingrese un nombre de categoría'
            onChange={(e) => setNombreCategoria(e.target.value)}
          > </InputText>
        </div>
        <div className='footer-dialog-create'>

          <Button
            className='btn-cancelar-dialog'
            label='Cancelar'
            onClick={() => { setVisible2(false); setNombreCategoria("") }}>
          </Button>
          <Button className='btn-crear-dialog' label='Actualizar'
            onClick={() => { setVisible2(false); actualizarCategoria(); setNombreCategoria("") }}>
          </Button>
        </div>
      </Dialog>

      {/*DIALOG ELIMINAR*/}
      <Dialog className='dialog-create' visible={visibleDelete} onHide={() => { setVisibleDelete(false); setNombreCategoria("") }}>
        <div className='head-dialog-create'>
          <h1>¿Desea eliminar {nombreCategoria}?</h1>
        </div>
        <div className='footer-dialog-create'>
          <Button
            className='btn-cancelar-dialog'
            label='Cancelar'
            onClick={() => { setVisibleDelete(false); setNombreCategoria("") }}>
          </Button>
          <Button className='btn-crear-dialog' label='Eliminar'
            onClick={() => { setVisibleDelete(false); deleteCategoria(); setNombreCategoria("") }}>
          </Button>
        </div>
      </Dialog>
    </>
  )
}
