import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HeaderAdmin } from '../components/VistaAdmin/HeaderAdmin';
import { Login } from '../components/VistaAdmin/Login';
import { AdminGestionRouter } from './AdminGestionRouter';
import { AuthContext } from '../context/AuthContext';

export const AdminRouter = () => {

    const { user, logout } = useContext(AuthContext);
    

    return (
        <>
            <section>
                <Routes>
                    {user?.access_token ?
                        <Route path='/gestion/*' element={<AdminGestionRouter />} />
                        :
                        <Route path='/login' element={<Login />} />
                    }
                    <Route path='/*' element={<Login />} />
                </Routes>
            </section>
        </>
    )
}
