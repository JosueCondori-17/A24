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
                <Route path='*' element={
                    <AuthProvider>
                        <AdminRouter />
                    </AuthProvider>

                } />

                <Route path='/tutiendita/*' element={
                    <ClienteProvider>
                        <ClienteRouter />
                    </ClienteProvider>
                } />

            </Routes>





        </>
    )
}
