import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../../CSS/vistaUser.css';
import axios from 'axios';
import { ClienteContext } from '../../context/ClienteContext';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';

export const HeaderNav = () => {

  const { categoriaContext, setCategoriaContext, cantidadCarrito, totalCarrito } = useContext(ClienteContext);
  const navegar = useNavigate();

  const [categoria, setCategoria] = useState([]);
  const [cateObject, setCateObject] = useState(null);

  const fetchCategorias = async () => {
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
    fetchCategorias();
  }, []);

  const obtenerObject = (obj) => {
    console.log("categoriaa: ", obj);
    setCategoriaContext({
      ...categoriaContext,
      id: obj?.id,
      nombre: obj?.label
    })
    setCateObject(obj);
    navegar(`/catalogo/${obj?.label}`);
  }

  const abrirLogin = () => {
    navegar('/admin-page/*');
  }
  const irACarrito = () => {
    navegar('/carrito');
  }


  return (
    <>
      <div className='caja'>
        {/* <div className='header-cli'>
          <Link to={'/'} className='logo'> A24 STORE</Link>
          <div className='botones'>
            <Link className='btn-link' to={'/admin-page/*'}><strong>Panel</strong> </Link>
            <Link className='btn-link' to={'/carrito'}>
              <p>S/ {totalCarrito}</p>
              <i className='pi pi-shopping-cart'></i>
              <span className={cantidadCarrito> 0 ? 'contador': ""}>{cantidadCarrito > 0 ? cantidadCarrito : null}</span>
            </Link>
          </div>
        </div>
        <div className='nav' >
          {categoria.map(categoria => (
            <NavLink
              key={categoria.id}
              className={cateObject?.id === categoria.id ? "activado" : "link"}
              onClick={() => { obtenerObject(categoria) }}
              to={`/catalogo/${categoria.label}`} >
              <p>{categoria.label}</p>
            </NavLink>
          ))}
        </div> */}
        <div className='section-header-left'>
          <h1 style={{ color: "#3a6adb" }}>TUTIENDITA.<strong style={{ color: "white" }}>COM</strong></h1>
        </div>
        <div className='section-header-right'>
          <div className='buscador'>
            <i className="pi pi-search"></i>
            <InputText
              className="w-full md:w-14rem select"
              placeholder="Busca un producto" />
          </div>
          <Link className='link' >Nosotros</Link>
          <Link className='link' to={'/'}>Ofertas</Link>
          <Dropdown
            placeholder='Selecciona una categoría'
            options={categoria}
            value={cateObject}
            onChange={(e) => obtenerObject(e.value)}
            className="w-full md:w-14rem select"
          />
          <div className='box-butons-nav'>
            <i className='pi pi-shopping-cart' onClick={() => irACarrito()}></i>
            <i className='pi pi-user' onClick={() => abrirLogin()}></i>
          </div>
        </div>

      </div>
    </>
  )
}
