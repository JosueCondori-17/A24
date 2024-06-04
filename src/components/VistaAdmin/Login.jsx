import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';

export const Login = () => {

    const [user, setUser] = useState();
    const crearRuta=()=>{
        return (
            <Routes>
                <Route path='/admin-page/gestion' />
            </Routes>
        )
    }

    return (
        <>

            <div className='caja-login'>
                <div className='login'>
                    <p>Inicie Sesión de Administrador A24</p>
                    <br />
                    <label htmlFor="user">Usuario</label>
                    <input type='text' required placeholder='Ingrese nombre de usuario' />
                    <br />
                    <label htmlFor="password">Contraseña</label>
                    <input type='password' required placeholder='Ingrese contraseña' />
                    <br />
                    <Link className='btn' to={'/admin-page/gestion'} >Ingresar</Link>

                </div>

            </div>

        </>
    )
}
