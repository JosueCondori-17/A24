import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HeaderAdmin } from '../components/VistaAdmin/HeaderAdmin';
import { Login } from '../components/VistaAdmin/Login';
import { AdminGestionRouter } from './AdminGestionRouter';

export const AdminRouter = () => {
    return (
        <>
            <HeaderAdmin />
            <hr />
            <section>
                <Routes>
                    <Route path='/*' element={<Login />} />
                    <Route path='/gestion/*' element={<AdminGestionRouter/>} />

                </Routes>
            </section>
        </>
    )
}
