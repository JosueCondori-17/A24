import React from 'react'
import '../../CSS/vistaAdmin.css';
import { AiFillDollarCircle } from "react-icons/ai";

export const HeaderAdmin = () => {
  return (
    <>
      <div className='caja-admin'>
        <div className='titulo-login'><h1>TUTIENDITA</h1><h1 className='com'>.C<i className="dolar"><AiFillDollarCircle /></i>M</h1></div>
      </div>
    </>
  )
}
