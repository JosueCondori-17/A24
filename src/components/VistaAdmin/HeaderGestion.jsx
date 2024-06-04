import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import iconCategoria from '../../icons/category.png';
import iconProducto from '../../icons/product.png';
import iconOferta from '../../icons/oferta.png';
import iconUser from '../../icons/user.png';
import iconPedido from '../../icons/pedido.png'; 

export const HeaderGestion = () => {

    const [menu, setMenu] = useState([
        {
            id: 1,
            icon: iconCategoria,
            path: 'categorias',
            option_menu: "Gestionar Categorías"
        },
        {
            id: 2,
            icon: iconProducto,
            path: 'productos',
            option_menu: "Gestionar Productos"
        },
        {
            id: 3,
            icon: iconOferta,
            path: 'ofertas',
            option_menu: "Gestionar Ofertas"
        },
        {
            id: 4,
            icon: iconPedido,
            path: 'pedidos',
            option_menu: "Lista de pedidos"
        },
        {
            id: 5,
            icon: iconUser,
            path: 'usuario-password',
            option_menu: "Usuario y Contraseña"
        }
    ]);

    const [itemMenuId, setItemMenuId] = useState(0);

    return (
        <>

            <div className='header-gestion'>
                {menu.map(item => (
                    <Link key={item.id} 
                        to={`/admin-page/gestion/${item.path}`} 
                        onClick={()=> setItemMenuId(item.id)} 
                        className={itemMenuId=== item.id ? 'activado-g': 'link-g'}>
                        <img className='icon-admin' src={item.icon} alt="Icono" />
                        {item.option_menu}
                    </Link>
                ))}
            </div>

        </>
    )
}
