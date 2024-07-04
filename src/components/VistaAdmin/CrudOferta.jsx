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

export const CrudOferta = () => {

  const toast = useRef(null);
  const showToast = (type, title, detail) => {
    toast.current.show({
      severity: type,
      summary: title,
      detail: detail,
      life: 3000,
    });
  };
  //IMAGEN
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handler para cuando se selecciona una imagen
  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Crear una vista previa de la imagen
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    setPreview(null);
  }, [selectedFile]);

  //CAMPOS GENERALES
  const [idOferta, setIdOferta] = useState(0);
  const [nombreOferta, setNombreOferta] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [descripcion, setDescripcion] = useState("");

  //FUNCIÓN PARA BORRAR LOS CAMPOS
  const deleteCampos = () => {
    setNombreOferta("");
    setPrecio("");
    setStock("");
    setSelectedFile(null);
    setDescripcion("");
  }
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

  //CRUD- CREAR
  const [visible, setVisible] = useState(false);

  const crearOferta = async () => {
    const formData = new FormData()
    formData.append("nombre", nombreOferta)
    formData.append("imagen", selectedFile)
    formData.append("precio", precio)
    formData.append("descripcion", descripcion)
    formData.append("stock", stock)

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/ofertas', formData);
      console.log('Oferta creada:', response.data);
      getOfertas();
      showToast(
        "success",
        "Oferta Creada",
        `Se creó ${nombreOferta} correctamente`
      );
    } catch (error) {
      console.error('Error al crear producto:', error);
    }

  }
  //CRUD - EDITAR
  const [visibleEdit, setVisibleEdit] = useState(false);
  const actualizarOferta = async () => {
    const id = idOferta;
    const formData = new FormData()
    formData.append("nombre", nombreOferta)
    formData.append("precio", precio)
    formData.append("descripcion", descripcion)
    formData.append("stock", stock)
    if (selectedFile instanceof File) {
      formData.append("imagen", selectedFile);
    }

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/ofertas/${id}`, formData);
      console.log('Oferta Creada:', response.data);
      getOfertas();
      showToast(
        "success",
        "Oferta Actualizada",
        `Se actualizó ${nombreOferta} correctamente`
      );
    } catch (error) {
      console.error('Error al actualizar oferta:', error);
    }
  }
  //CRUD - DELETE
  const [visibleDelete, setVisibleDelete] = useState(false);
  const deleteOferta = async () => {
    const id = idOferta;
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/ofertas/${id}`);
      console.log('Oferta Eliminada:', response.data);
      getOfertas();
      showToast(
        "success",
        "Oferta Eliminada",
        `Se eliminó ${nombreOferta} correctamente`
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
            setVisibleEdit(true);
            setIdOferta(data.id);
            setNombreOferta(data.nombre);
            setSelectedFile(data.imagen);
            setPrecio(data.precio);
            setDescripcion(data.descripcion);
            setStock(data.stock);
          }}
          className='btn-edit'>
          <i className="pi pi-pencil"></i>
        </Button>
        <Button
          onClick={() => {
            setVisibleDelete(true);
            setIdOferta(data.id);
            setNombreOferta(data.nombre);
          }}
          className='btn-delete'>
          <i className="pi pi-trash"></i>
        </Button>
      </div>
    )
  };
  const mostrarImg = (data) => {
    return (
      <img width="40px" src={data.imagen} alt={data.nombre} />
    )
  }
  const [globalFilter, setGlobalFilter] = useState('');
  const getHeader = () => {
     return (
           <div style={{padding:"5px", display:"flex", justifyContent:"end", alignItems:"center"}}>
              <i className="pi pi-search"></i>
              <InputText style={{ textAlign: 'left', padding:"5px", marginLeft:"10px" }}
                 type="search"
                 onInput={(e) => setGlobalFilter(e.target.value)}
                 placeholder="Buscar oferta" />
           </div>
     );
  };
  let header = getHeader();

  return (
    <>
      <Toast className='toast-correct' ref={toast} />
      <div className="caja-crud-admin">
        <div className='crear-button'>
          <Button onClick={() => setVisible(true)} className='btn-create'><i className="pi pi-plus"></i>  Crear Oferta</Button>
        </div>
        <div className='tabla'>
          <DataTable
          globalFilter={globalFilter}
          header={header}
          scrollable
          paginator rows={4}
          scrollHeight="300px" 
          className="tabla-crud" 
          value={ofertas} 
          tableStyle={{ minWidth: '50rem' }}>
            <Column className="column-crud" header="ID" field="id" ></Column>
            <Column className="column-crud" header="Nombre" field="nombre" ></Column>
            <Column className="column-crud" header="Imagen" body={(e) => mostrarImg(e)}></Column>
            <Column className="column-crud" header="Precio" field="precio" ></Column>
            <Column className="column-crud" header="Descripción" field="descripcion" ></Column>
            <Column className="column-crud" header="Stock" field="stock" ></Column>
            <Column className="column-crud" header="Acciones" body={(e) => butonsAccion(e)} ></Column>
          </DataTable>
        </div>
      </div>

      {/*DIALOG CREAR */}
      <Dialog
        className='dialog-crud-producto'
        visible={visible}
        onHide={() => setVisible(false)}
        header={<div ><h2>Crea una Oferta</h2></div>}
        footer={<div className='footer-dialog-create'>

          <Button
            className='btn-cancelar-dialog'
            label='Cancelar'
            onClick={() => {
              setVisible(false); deleteCampos();
            }}>
          </Button>
          <Button className='btn-crear-dialog' label='Crear'
            onClick={() => {
              setVisible(false);
              crearOferta();
              deleteCampos();
            }}>
          </Button>
        </div>}
      >
        <div className='body-dialog-crud-producto'>
          <div className='dialog-dato-producto'>
            <p>En esta sección podrás crear ofertas para tu tienda.</p>
            <label>Título de tu oferta:</label>
            <InputText value={nombreOferta}
              type='text'
              placeholder='Ingrese nombre de la Oferta'
              onChange={(e) => setNombreOferta(e.target.value)}
            > </InputText>
          </div>
          <div className='dialog-dato-producto'>
            <label>Precio:</label>
            <InputText value={precio}
              type='number'
              placeholder='Ingrese precio a disponer'
              onChange={(e) => setPrecio(e.target.value)}
            > </InputText>
          </div>
          <div className='dialog-dato-producto'>
            <label>Stock:</label>
            <InputText value={stock}
              type='number'
              placeholder='Ingrese el stock de la Oferta'
              onChange={(e) => setStock(e.target.value)}
            > </InputText>
          </div>
          <div className='dialog-dato-producto'>
            <label>Descripción:</label>
            <InputText value={descripcion}
              type='text'
              placeholder='Ingrese la descripción de la oferta '
              onChange={(e) => setDescripcion(e.target.value)}
            > </InputText>
          </div>
          <div className='dialog-dato-producto'>
            <div className='div-img-select'>
              <label>Imagen de la Oferta:</label>
              <input
                className='input-img'
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={onFileChange}>
              </input>
            </div>
            <div className='div-img'>
              {preview !== null ? (
                <img
                  src={preview}
                  alt="Vista previa"
                  style={{ width: '80px', objectFit: 'cover' }}
                />
              ) : (
                selectedFile && (
                  <img
                    src={selectedFile}
                    alt="Vista previa"
                    style={{ width: '80px', objectFit: 'cover' }}
                  />
                )
              )}
            </div>

          </div>

        </div>

      </Dialog>

      {/*DIALOG EDITAR*/}
      <Dialog
        className='dialog-crud-producto'
        visible={visibleEdit}
        onHide={() => { setVisibleEdit(false), deleteCampos() }}
        header={<div><h2>Actualiza {nombreOferta}</h2></div>}
        footer={<div className='footer-dialog-create'>
          <Button
            className='btn-cancelar-dialog'
            label='Cancelar'
            onClick={() => {
              setVisibleEdit(false); deleteCampos();
            }}>
          </Button>
          <Button className='btn-crear-dialog' label='Actualizar'
            onClick={() => {
              setVisibleEdit(false);
              actualizarOferta();
              deleteCampos();
            }}>
          </Button>
        </div>}
      >
        <div className='body-dialog-crud-producto'>
          <div className='dialog-dato-producto'>
            <p>En esta sección podrás editar las ofertas de tu tienda.</p>
            <label>Título de tu oferta:</label>
            <InputText value={nombreOferta}
              type='text'
              placeholder='Ingrese nombre de la Oferta'
              onChange={(e) => setNombreOferta(e.target.value)}
            > </InputText>
          </div>
          <div className='dialog-dato-producto'>
            <label>Precio:</label>
            <InputText value={precio}
              type='number'
              placeholder='Ingrese precio a disponer'
              onChange={(e) => setPrecio(e.target.value)}
            > </InputText>
          </div>
          <div className='dialog-dato-producto'>
            <label>Stock:</label>
            <InputText value={stock}
              type='number'
              placeholder='Ingrese el stock de la Oferta'
              onChange={(e) => setStock(e.target.value)}
            > </InputText>
          </div>
          <div className='dialog-dato-producto'>
            <label>Descripción:</label>
            <InputText value={descripcion}
              type='text'
              placeholder='Ingrese la descripción de la oferta '
              onChange={(e) => setDescripcion(e.target.value)}
            > </InputText>
          </div>
          <div className='dialog-dato-producto'>
            <div className='div-img-select'>
              <label>Imagen de la Oferta:</label>
              <input
                className='input-img'
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={onFileChange}>
              </input>
            </div>
            <div className='div-img'>
              {preview !== null ? (
                <img
                  src={preview}
                  alt="Vista previa"
                  style={{ width: '80px', objectFit: 'cover' }}
                />
              ) : (
                selectedFile && (
                  <img
                    src={selectedFile}
                    alt="Vista previa"
                    style={{ width: '80px', objectFit: 'cover' }}
                  />
                )
              )}
            </div>

          </div>

        </div>
      </Dialog>

      {/*DIALOG ELIMINAR*/}
      <Dialog
        className='dialog-create'
        visible={visibleDelete}
        onHide={() => { setVisibleDelete(false); deleteCampos() }}
        header={<div><h3>¿Desea eliminar {nombreOferta}?</h3></div>}
        footer={<div className='footer-dialog-create'>
          <Button
            className='btn-cancelar-dialog'
            label='Cancelar'
            onClick={() => { setVisibleDelete(false); deleteCampos() }}>
          </Button>
          <Button className='btn-crear-dialog' label='Eliminar'
            onClick={() => { setVisibleDelete(false); deleteOferta(); deleteCampos() }}>
          </Button>
        </div>}
      >
        <br />

      </Dialog>
    </>
  )
}
