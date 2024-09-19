import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import authService from '../../auth/authService';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import fondoLogin from '../../images/fondoLogin.jpg'
import { Button } from 'primereact/button';
import { AiFillDollarCircle } from "react-icons/ai";
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';

export const Login = () => {
    const toast = useRef(null);
    const showToast = (type, title, detail) => {
        toast.current.show({
            severity: type,
            summary: title,
            detail: detail,
            life: 3000,
        });
    };
    const { login, logout } = useContext(AuthContext);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfi, setPasswordConfi] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const [estadoEntrada, setEstadoEntrada] = useState(0);

    const navegar = useNavigate();
    
    useEffect(() => {
        logout();
    }, []);

    const Login = async () => {
        if (email && password != '') {
            try {
                const response = await authService.login(email, password);
                login();
                console.log('Logged in:', response);
                navegar('/gestion/*');
            } catch (error) {
                console.error('Login failed:', error);
                showToast(
                    "error",
                    "Error al ingresar",
                    `${error.response.data.errors.email}`
                );
            }
        }
        else {
            showToast(
                "error",
                "Error al ingresar",
                `Faltan completar los campos`
            );
        }
    };
    const registrar = async () => {
        if (nombre && email && password && passwordConfi != '') {
            if (password.length >= 5 && password == passwordConfi) {
                try {
                    const response = await authService.register(nombre, email, password, passwordConfi);
                    cambiarEstadoEntrada();
                    showToast(
                        "success",
                        "Registro exitoso",
                        `Se registró correctamente`
                    );
                }
                catch (error) {
                    console.log("error de registro", error);

                }
            }
            else {
                if (password.length < 5) {
                    setMensajeError("La contraseña debe ser de 5 caracteres como mínimo")
                }
                else {
                    setMensajeError("Confirme su contraseña correctamente")
                }
            }
        }
        else {
            showToast(
                "error",
                "Registro sin éxito",
                `Faltan completar los campos`
            );
        }
    }

    const cambiarEstadoEntrada = ()=>{
        if(estadoEntrada == 0){
            setEstadoEntrada(1)
            setEmail('')
            setPassword('')
        }
        else{
            setEstadoEntrada(0)
            setNombre('');
            setEmail('');
            setPassword('');
            setPasswordConfi('');
        }
    }

    return (
        <>
            <Toast className='toast-correct' ref={toast} />
            <div className='caja-login'>

                <div className='fondo-login'>
                    <img src={fondoLogin} alt='fondo-login' />
                </div>
                <div className="layer"></div>

                <div className='login'>
                    <div className='titulo-login'><h1>TUTIENDITA</h1><h1 className='com'>.C<AiFillDollarCircle />M</h1></div>
                    {
                        estadoEntrada === 0 ? (
                            <>
                                <div>
                                    <p className='textoForm'>Inicie sesión para administrar su tienda</p>
                                </div>
                                <InputText
                                    required
                                    className='input-login'
                                    type="email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <InputText
                                    required
                                    className='input-login'
                                    type="password"
                                    placeholder='Contraseña'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />

                                <div className='footer-login'>
                                    <Button className='btn-login' onClick={() => Login()} label='Acceder' />
                                    <Button
                                        onClick={() => cambiarEstadoEntrada()}
                                        className='btn-login'
                                        label="Registrarse"
                                        severity="secondary"
                                        outlined />
                                </div>
                            </>
                        ) :
                            (
                                <>
                                    <div>
                                        <p className='textoForm'>Registre sus datos para administrar su tienda</p>
                                    </div>
                                    <InputText
                                        required
                                        className='input-login'
                                        type="text"
                                        placeholder='Nombre'
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)} />

                                    <InputText
                                        required
                                        className='input-login'
                                        type="email"
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    <InputText
                                        required
                                        className='input-login'
                                        type="password"
                                        placeholder='Contraseña'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <InputText
                                        required
                                        className='input-login'
                                        type="password"
                                        placeholder='Confirmar contraseña'
                                        value={passwordConfi}
                                        onChange={(e) => setPasswordConfi(e.target.value)} />
                                    <small style={{ color: "red" }}>{mensajeError}</small>
                                    <div className='footer-login'>
                                        <Button
                                            onClick={() => cambiarEstadoEntrada()}
                                            className='btn-login'
                                            label="Cancelar"
                                            severity="secondary"
                                            outlined />
                                        <Button className='btn-login' onClick={() => registrar()} label='Registrarme' />
                                    </div>
                                </>
                            )
                    }


                </div>

            </div>

        </>
    )
}
