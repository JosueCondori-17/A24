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
import { Dropdown } from 'primereact/dropdown';

export const CrudProducto = () => {
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
  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [categoriaSeleccionada2, setCategoriaSeleccionada2] = useState(null);
  const [nombreCategoria, setNombreCategoria] = useState("");

  //CAMPOS PARA DIALOGS
  const [visible, setVisible] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);

  //FUNCIÓN PARA BORRAR LOS CAMPOS
  const deleteCampos = () => {
    setNombreProducto("");
    setPrecio("");
    setStock("");
    setCategoriaSeleccionada(null);
    setSelectedFile("");
  }

  //TRAER CATEGORÍAS
  const [categorias, setCategorias] = useState([
    {
      "id": 0,
      "label": ""
    }
  ]);


  const getCategorias = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/categorias');
      console.log("categoriassssss", response.data);
      setCategorias(response.data);
    }
    catch (error) {
      console.error('Error al obtener categorías:', error);
    }
  };
  useEffect(() => {
    getCategorias();
  }, []);

  useEffect(() => {
    if (categorias) {
      categorias.map((item) => {
        if (item.label == nombreCategoria) {
          setCategoriaSeleccionada2(item);
        }
      })
    }
  }, [visibleEdit]);
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
      console.log(response.data);
      setProductos(response.data);
    }
    catch (error) {
      console.error('Error al obtener Productos:', error);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);

  //CRUD- CREAR
  const [dataAPI, setDataAPI] = useState(null);
  const getApi = async () => {
    try {
      const respuesta = await axios.get("https://rickandmortyapi.com/api/character");
      console.log("MI DATA", respuesta.data.results);
      setDataAPI(respuesta.data.results);
    }
    catch (error) {
      console.log("Error al traer data", error);
    }
  }
  useEffect(() => {
    getApi()
  }, [])

  const crearProducto = async () => {
    const formData = new FormData()
    formData.append("id_categoria", categoriaSeleccionada.id)
    formData.append("nombre", nombreProducto)
    formData.append("precio", precio)
    formData.append("stock", stock)
    formData.append("nombre_categoria", categoriaSeleccionada.label)
    formData.append("imagen", selectedFile)

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/productos', formData);
      console.log('Producto creado:', response.data);
      getProducto();
      showToast(
        "success",
        "Producto Agregado",
        `Se agregó ${nombreProducto} correctamente`
      );
    } catch (error) {
      console.error('Error al crear producto:', error);
    }

  }
  //CRUD - EDITAR

  const [idProducto, setIdProducto] = useState(null);

  const actualizarProducto = async () => {
    const id = idProducto;

    const formData = new FormData();
    formData.append("id_categoria", categoriaSeleccionada2.id);
    formData.append("nombre", nombreProducto);
    formData.append("precio", precio);
    formData.append("stock", stock);
    formData.append("nombre_categoria", categoriaSeleccionada2.label);
    if (selectedFile instanceof File) {
      formData.append("imagen", selectedFile);
    }

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/productos/${id}`, formData);
      console.log('Producto creado:', response.data);
      getProducto();
      showToast(
        "success",
        "Producto Actualizado",
        `Se actualizó ${nombreProducto} correctamente`
      );
    } catch (error) {
      console.error('Error al actualizar producto:', error);
    }
  }

  //CRUD- DELETE

  const deleteProducto = async () => {
    const id = idProducto;
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/productos/${id}`);
      console.log('Producto Eliminado :', response.data);
      getProducto();
      showToast(
        "success",
        "Producto Eliminado",
        `Se eliminó ${nombreProducto} correctamente`
      );
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  }

  const [visibleData, setVisibleData] = useState(false);

  const butonsAccion = (data) => {
    return (
      <div className='caja-update-delete'>
        <Button
          onClick={() => {
            setVisibleEdit(true);
            setIdProducto(data.id)
            setNombreProducto(data.nombre);
            setPrecio(data.precio);
            setStock(data.stock);
            setSelectedFile(data.url_imagen);
            console.log(data.nombre_categoria);
            setNombreCategoria(data.nombre_categoria);
          }}
          className='btn-edit'>
          <i className="pi pi-pencil"></i>
        </Button>
        <Button
          onClick={() => {
            setVisibleDelete(true);
            setIdProducto(data.id);
            setNombreProducto(data.nombre)
          }}
          className='btn-delete'>
          <i className="pi pi-trash"></i>
        </Button>
        <button onClick={()=> setVisibleData(true)}>ver data</button>
      </div>
    )
  };
  const mostrarImg = (data) => {
    return (
      <img width="40px" src={data.url_imagen} alt={data.nombre} />
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
          placeholder="Buscar producto" />
      </div>
    );
  };
  let header = getHeader();

  return (
    <>
      <Toast className='toast-correct' ref={toast} />
      <div className="caja-crud-admin">
        <div className='crear-button'>
          <Button
            onClick={() => setVisible(true)}
            className='btn-create'>
            <i className="pi pi-plus"></i>  Agregar nuevo producto
          </Button>
        </div>
        <div className='tabla'>
          <DataTable
            globalFilter={globalFilter}
            header={header}
            paginator rows={4}
            scrollable scrollHeight="300px"
            className="tabla-crud"
            value={productos}
            tableStyle={{ minWidth: '50rem' }}>
            <Column className="column-crud" header="ID" field="id" ></Column>
            <Column className="column-crud" header="Nombre" field="nombre" ></Column>
            <Column className="column-crud" header="Imagen" body={(e) => mostrarImg(e)} ></Column>
            <Column className="column-crud" header="Precio" field="precio" ></Column>
            <Column className="column-crud" header="Stock" field="stock" ></Column>
            <Column className="column-crud" header="Categoria" field='nombre_categoria' ></Column>
            <Column className="column-crud" header="Acciones" body={(e) => butonsAccion(e)} ></Column>
          </DataTable>
        </div>
      </div>

      {/*DIALOG CREAR */}
      <div className='container-dialog'>
        <Dialog
          className='dialog-crud-producto'
          visible={visible}
          onHide={() => setVisible(false)}
          header={<div><h2>Agregar nuevo producto</h2></div>}
        >

          <div className='body-dialog-crud-producto'>
            <div className='dialog-dato-producto'>
              <p>En esta sección puedes agregar más productos para la variedad de tu tienda.</p>
              <label>Nombre del producto:</label>
              <InputText value={nombreProducto}
                type='text'
                placeholder='Ingrese el nombre de Producto'
                onChange={(e) => setNombreProducto(e.target.value)}
              > </InputText>
            </div>
            <div className='dialog-dato-producto'>
              <label>Precio:</label>
              <InputText value={precio}
                type='number'
                placeholder='Ingrese su precio'
                onChange={(e) => setPrecio(e.target.value)}
              > </InputText>
            </div>
            <div className='dialog-dato-producto'>
              <label>Stock:</label>
              <InputText value={stock}
                type='number'
                placeholder='Ingrese el stock del producto'
                onChange={(e) => setStock(e.target.value)}
              > </InputText>
            </div>
            <div className='dialog-dato-producto'>
              <label>Categoría:</label>
              <Dropdown
                value={categoriaSeleccionada}
                onChange={(e) => { setCategoriaSeleccionada(e.value); console.log(e.value); }}
                options={categorias}
                optionLabel="label"
                placeholder="Seleccciona una categoría"
                className="w-full md:w-14rem select"
              />
            </div>
            <div className='dialog-dato-producto'>
              <div className='div-img-select'>
                <label>Imagen del producto:</label>
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
          <div className='footer-dialog-create'>

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
                crearProducto();
                deleteCampos();
              }}>
            </Button>
          </div>
        </Dialog>
      </div>
      {/*DIALOG EDITAR*/}
      <div className='container-dialog'>
        <Dialog
          className='dialog-crud-producto'
          visible={visibleEdit}
          onHide={() => { setVisibleEdit(false); deleteCampos() }}
          header={<div><h2>Actualiza {nombreProducto}</h2></div>}
          footer={<div className='footer-dialog-create'>
            <Button
              className='btn-cancelar-dialog'
              label='Cancelar'
              onClick={() => { setVisibleEdit(false); deleteCampos(); }}>
            </Button>
            <Button className='btn-crear-dialog' label='Actualizar'
              onClick={() => { setVisibleEdit(false); actualizarProducto(); deleteCampos(); }}>
            </Button>
          </div>}
        >

          <div className='body-dialog-crud-producto'>
            <div className='dialog-dato-producto'>
              <p>En esta sección podrás editar los productos de tu tienda.</p>
              <label>Nombre del producto:</label>
              <InputText value={nombreProducto}
                type='text'
                placeholder='Ingrese el nombre de Producto'
                onChange={(e) => setNombreProducto(e.target.value)}
              > </InputText>
            </div>
            <div className='dialog-dato-producto'>
              <label>Precio:</label>
              <InputText value={precio}
                type='number'
                placeholder='Ingrese su precio'
                onChange={(e) => setPrecio(e.target.value)}
              > </InputText>
            </div>
            <div className='dialog-dato-producto'>
              <label>Stock:</label>
              <InputText value={stock}
                type='number'
                placeholder='Ingrese el stock del producto'
                onChange={(e) => setStock(e.target.value)}
              > </InputText>
            </div>
            <div className='dialog-dato-producto'>
              <label>Categoría:</label>
              <Dropdown
                value={categoriaSeleccionada2}
                onChange={(e) => { setCategoriaSeleccionada2(e.value); console.log(e.value); }}
                options={categorias}
                optionLabel="label"
                placeholder="Seleccciona una categoría"
                className="w-full md:w-14rem select"
              />
            </div>
            <div className='dialog-dato-producto'>
              <div className='div-img-select'>
                <label>Imagen del producto:</label>
                <input
                  className='input-img'
                  type="file" id="fileInput"
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
      </div>
      {/*DIALOG ELIMINAR*/}
      <Dialog
        className='dialog-create'
        visible={visibleDelete}
        onHide={() => { setVisibleDelete(false); deleteCampos(); }}
        header={<div><h3>¿Desea eliminar {nombreProducto}?</h3></div>}
      >
        <br />
        <div className='footer-dialog-create'>
          <Button
            className='btn-cancelar-dialog'
            label='Cancelar'
            onClick={() => { setVisibleDelete(false), deleteCampos() }}>
          </Button>
          <Button className='btn-crear-dialog' label='Eliminar'
            onClick={() => { setVisibleDelete(false); deleteProducto(); deleteCampos() }}>
          </Button>
        </div>
      </Dialog>
      <Dialog visible={visibleData} onHide={()=> setVisibleData(false)}>
                <div>
                  {dataAPI?.map((item) =>{
                    return(
                      <>
                      <p key={item.id}>{item.name}</p>
                      </>
                    )
                  })}
                </div>
      </Dialog>
    </>
  )
}
