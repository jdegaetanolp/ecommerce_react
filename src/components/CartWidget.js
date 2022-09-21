import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 

export default function CartWidget() {

    return(
        <a href="javascript:mostrarCarrito();" className='carrito'>    
                        
            <FontAwesomeIcon icon={faCartShopping} size="xl"/>

        </a>
    )
}