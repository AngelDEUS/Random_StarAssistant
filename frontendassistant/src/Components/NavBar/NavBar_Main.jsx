// NavBar.js
import React from 'react';
import './stylesNavbar.css';
import LogoNavbar from '../../Assets/Logo+Text.png';

const NavBar = () => {
    return (
        <header className="header_NavBar">
            <div className="contentNavBar">
                <div className="logo">
                    <img className='logoNavbar' src={LogoNavbar} alt="" />
                </div>
                <nav className="navigation">
                    <ul>
                        <li className='inicioNav'>Inicio</li>
                        <li className='nonSelect'>Generar tabla</li>
                        <li className='nonSelect'>Gestión de Empleados</li>
                        <li className='como_usar'>¿Cómo usar?</li>
                    </ul>
                </nav>
                <button className="generate-button"><i className="bi bi-table"></i> Generar Tabla</button>
            </div>
            <div className="separador_Navbar"></div>
        </header>
    );
};

export default NavBar;
