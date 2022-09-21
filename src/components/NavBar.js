import React from 'react';
import CartWidget from './CartWidget';

export default function NavBar() {

    return( <nav className="navbar navbar-expand-sm bg-white">

                <a className="navbar-brand" href="#">
                    <img src="logo.png" className='img-fluid'></img>
                </a>
        
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Motherboards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Procesadores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Placas de video</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Memorias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Almacenamiento</a>
                        </li>
                    </ul>

                </div>

                <div>
                    <CartWidget></CartWidget>
                </div>

            </nav>)
}