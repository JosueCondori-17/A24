import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CrudCategoria } from '../components/VistaAdmin/CrudCategoria'
import { CrudProducto } from '../components/VistaAdmin/CrudProducto'
import { CrudOferta } from '../components/VistaAdmin/CrudOferta'
import { UsuarioPassword } from '../components/VistaAdmin/UsuarioPassword'
import { FooterAdmin } from '../components/VistaAdmin/FooterAdmin'
import { HeaderGestion } from '../components/VistaAdmin/HeaderGestion'
import { ListaPedido } from '../components/VistaAdmin/ListaPedido'
import { HeaderAdmin } from '../components/VistaAdmin/HeaderAdmin'

export const AdminGestionRouter = () => {
  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <HeaderGestion />
      <hr />
      <section className='seccion-gestion'>
        <Routes>
          <Route path='/*' element={<CrudCategoria />} />
          <Route path='/productos' element={<CrudProducto />} />
          <Route path='/ofertas' element={<CrudOferta />} />
          <Route path='/pedidos' element={<ListaPedido />} />
          <Route path='/usuario-password' element={<UsuarioPassword />} />
        </Routes>
      </section>
      <hr />
      <FooterAdmin />

    </>
  )
}
