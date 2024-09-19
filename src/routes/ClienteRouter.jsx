import React, { useState, lazy, Suspense, useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

const Ofertas = lazy(() => import('../components/VistaCliente/Ofertas'));
const Catalogo = lazy(() => import('../components/VistaCliente/Catalogo'));
const Producto = lazy(() => import('../components/VistaCliente/Producto'));
const FinalizarCompra = lazy(() => import('../components/VistaCliente/FinalizarCompra'));
const AutoCompra = lazy(() => import('../components/VistaCliente/AutoCompra'));
import { Footer } from '../components/VistaCliente/Footer';
import { HeaderNav } from '../components/VistaCliente/HeaderNav';

export const ClienteRouter = () => {

    return (
        <>
            <HeaderNav />
            <section className='seccion-cli'>
                <Suspense fallback={<div>Cargando....</div>}>
                    <Routes>
                        <Route path='/' element={<Ofertas />} />
                        <Route path='/catalogo/:categoria' element={<Catalogo />} />
                        <Route path='/carrito' element={<AutoCompra />} />
                        <Route path='/producto' element={<Producto />} />
                        <Route path='/compra' element={<FinalizarCompra />} />
                    </Routes>
                </Suspense>
            </section>
            <Footer />
        </>
    )
}
