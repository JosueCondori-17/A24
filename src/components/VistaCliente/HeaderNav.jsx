import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../../CSS/vistaUser.css';
import axios from 'axios';
import { ClienteContext } from '../../context/ClienteContext';
import { MegaMenu } from 'primereact/megamenu';
import iconCarrito from '../../icons/carrito.png';

export const HeaderNav = () => {

  const { categoriaContext, setCategoriaContext, cantidadCarrito, totalCarrito } = useContext(ClienteContext);


  const [categoria, setCategoria] = useState([
    {
      "id": 0,
      "nombre": ""
    }
  ]);
  const [cateObject, setCateObject] = useState(
    {
      "id": 0,
      "nombre": ""
    }
  );

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

  const obtenerObject = (obj) => {
    console.log("categoriaa: ", obj);
    setCateObject(obj);
  }

  useEffect(() => {
    fetchCategorias();
  }, []);

  useEffect(() => {
    setCategoriaContext({
      ...categoriaContext,
      id: cateObject?.id,
      nombre: cateObject?.nombre
    })
  }, [cateObject]);


  return (
    <>
      <div className='caja'>
        <div className='header-cli'>
          <Link to={'/'} className='logo'> A24 STORE</Link>
          <div className='botones'>
            <Link className='btn-link' to={'/admin-page/*'}> Acceder </Link>
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
        </div>
      </div>
    </>
  )
}
