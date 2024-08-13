import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollTop } from 'primereact/scrolltop';

export const Footer = () => {

  const [categorias, setCategorias]= useState([
    {
      "id": 0,
      "nombre": ""
    }
  ]);

  const getCategorias = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/categorias');
      setCategorias(response.data);
    }
    catch (error) {
      console.error('Error al obtener categorías:', error);
    }
  };
  useEffect(()=>{
    getCategorias();
  }, [])
  return (
    <>
    <footer className='footer-container'>
    <div className='foo-lista'>
      <h2>Contáctanos</h2> 
      <li><i className='pi pi-whatsapp'/> 929863124</li>
      <h2>Correo</h2>
      <li><i className='pi pi-envelope'/> example@gmail.com</li>
    </div>
    <div className='foo-lista'>
      <h2>Categorías</h2>
      {categorias.map(item =>{
        return <li key={item.id}>{item.label} </li>
      })}
      
    </div>
    <div className='foo-lista'>
      <h2>Conócenos</h2>
      <li><i className='pi pi-users'/> Sobre Nosotros</li>
      <li><i className='pi pi-book'/> Nuestra Historia</li>
      <li><i className='pi pi-eye'/> Nuestra Visión</li>
    </div>
    <div className='foo-lista'>
      <h2>Síguenos</h2>
      <p>Conoce más acerca de nosotros y nuestras promos por nuestras redes sociales</p>
      <li><i className='pi pi-facebook'/> Facebook</li>
      <li><i className='pi pi-tiktok'/> Tik Tok</li>
      <li><i className='pi pi-instagram'/> Instagram</li>
    </div>
    
    </footer>

    </>
  )
}
