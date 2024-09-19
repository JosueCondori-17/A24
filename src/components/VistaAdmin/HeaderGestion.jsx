import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const HeaderGestion = () => {

    const [menu, setMenu] = useState([
        {
            id: 1,
            icon: 'pi pi-list',
            path: 'categorias',
            option_menu: "Gestionar Categorías"
        },
        {
            id: 2,
            icon: 'pi pi-box',
            path: 'productos',
            option_menu: "Gestionar Productos"
        },
        {
            id: 3,
            icon: 'pi pi-tag',
            path: 'ofertas',
            option_menu: "Gestionar Ofertas"
        },
        {
            id: 4,
            icon: 'pi pi-receipt',
            path: 'pedidos',
            option_menu: "Lista de pedidos"
        },
        // {
        //     id: 5,
        //     icon: 'pi pi-user',
        //     path: 'usuario-password',
        //     option_menu: "Usuario y Contraseña"
        // }
    ]);

    const [itemMenuId, setItemMenuId] = useState(0);

    return (
        <>

            <div className='header-gestion'>
                {menu.map(item => (
                    <Link key={item.id} 
                        to={`/gestion/${item.path}`} 
                        onClick={()=> setItemMenuId(item.id)} 
                        className={itemMenuId=== item.id ? 'activado-g': 'link-g'}>
                        <i className={item.icon}></i>
                        {item.option_menu}
                    </Link>
                ))}
            </div>

        </>
    )
}
