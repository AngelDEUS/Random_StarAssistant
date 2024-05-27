// NavBar.js
import React from 'react';
import './stylesNavbar.css';
import LogoNavbar from '../../Assets/Logo+Text.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="header_NavBar">
            <div className="contentNavBar">
                <div className="logo">
                    <img className='logoNavbar' src={LogoNavbar} alt="" />
                </div>
                <nav className="navigation">
                    <ul>
                        <li className='inicioNav'>
                            <Link to='/inicio'>
                                Inicio
                            </Link>
                        </li>
                        <li className='nonSelect'>
                            <Link to='/creadorequipos'>
                                Generar tabla
                            </Link>
                        </li>
                        <li className='nonSelect'>
                            <Link to='/gestionusuarios'>
                                Gestión de Empleados
                            </Link>
                        </li>
                        <li className='como_usar'>
                            <Link to='/comousar'>
                                ¿Cómo usar?
                            </Link>
                        </li>

                    </ul>
                </nav>
                <button className="generate-button"><i className="bi bi-table"></i> Generar Tabla</button>
            </div>
            <div className="separador_Navbar"></div>
        </header>
    );
};

export default NavBar;
