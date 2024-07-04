import React from 'react'
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ClienteRouter } from './ClienteRouter';
import { AdminRouter } from './AdminRouter';
import { ClienteProvider } from '../context/ClienteContext';
import { AuthProvider } from '../context/AuthContext';


export const RouterApp = () => {
    return (
        <>

            <Routes>
                <Route path='/*' element={
                    <ClienteProvider>
                        <ClienteRouter />
                    </ClienteProvider>
                } />

                <Route path='/admin-page/*' element={
                    <AuthProvider>
                        <AdminRouter />
                    </AuthProvider>
                } />

            </Routes>





        </>
    )
}
