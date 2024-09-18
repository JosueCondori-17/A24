import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const FooterAdmin = () => {
  const { logout } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const navegar = useNavigate();

  const cerrarSesion = () => {
    logout();
    navegar('/admin-page');
  }

  return (
    <>
      <div className='footer-container-admin'>
        <Button className='btn-salir' onClick={() => setVisible(true)} ><i className="pi pi-sign-out"></i><p> Cerrar sesión</p></Button>
      </div>
      <Dialog
        style={{ borderRadius: "40px" }}
        visible={visible}
        onHide={() => setVisible(false)}>
        <div style={{ padding: "0px 20px 20px 20px" }}>
          <h4>¿Desea cerrar sesión?</h4>
          <br />
          <div style={{ display: "flex", justifyContent: "end", gap: "10px" }}>
            <Button className='btn-cancel' onClick={() => setVisible(false)}>Cancelar</Button>
            <Button className='btn-out' onClick={() => cerrarSesion()}>Cerrar</Button>
          </div>
        </div>

      </Dialog>
    </>
  )
}
