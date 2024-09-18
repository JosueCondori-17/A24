import React, { useContext, useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import authService from '../../auth/authService';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import fondoLogin from '../../images/fondoLogin.jpg'
import { Button } from 'primereact/button';
import { AiFillDollarCircle } from "react-icons/ai";

export const Login = () => {
    const { login, logout } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navegar = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await authService.login(email, password);
            login();
            console.log('Logged in:', response);
            navegar('/admin-page/gestion');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    useEffect(() => {
        logout();
    }, []);

    return (
        <>

            <div className='caja-login'>

                <div className='fondo-login'>
                    <img src={fondoLogin} alt='fondo-login' />
                </div>
                <div className="layer"></div>

                <form onSubmit={handleLogin} className='login'>
                    <div className='titulo-login'><h1>TUTIENDITA</h1><h1 className='com'>.C<AiFillDollarCircle />M</h1></div>
                    <div>
                        <p className='textoForm'>Inicie sesión para administrar su tienda</p>
                    </div>
                    <input type="email" placeholder='Usuario' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button className='btn-entrar' type="submit" > Entrar</Button>
                </form>

            </div>

        </>
    )
}
