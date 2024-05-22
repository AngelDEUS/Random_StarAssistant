import React from 'react';
import './styles_footer.css'
import LogoFooter from '../../Assets/Logo+Text.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <div className="LogoColumn_Footer">
                        <img className='logoFooter' src={LogoFooter} alt="logoFooter" />
                        <p className='textLogo_Footer'>Sistema de Ayuda.</p>
                    </div>
                    <div className="LogoColumn_Footer">
                        <h3>Acerca de Nosotros</h3>
                        <p>
                            Somos un grupo de trabajo unido
                            para desarrollar proyectos con
                            <span className='colorMark_Footer'> expertos</span> y como <span className='colorMark_Footer'>expertos</span>.
                        </p>
                    </div>
                </div>
                <div className="footer-column">
                    <h3>Desarrolladores a cargo</h3>
                    <p><span className='colorMark_Footer'><i className="bi bi-braces"></i></span> Miguel Ángel Ayala<br />
                        <span className='colorMark_Footer'><i className="bi bi-braces"></i></span> Andrés Santiago Moreno</p>
                </div>
                <div className="footer-column">
                    <h3>Contacta</h3>
                    <p><span className='colorMark_Footer'><i className="bi bi-telephone"></i></span> +57 323 1345458<br />
                        <span className='colorMark_Footer'><i className="bi bi-envelope"></i></span> starContact@gmail.com</p>
                </div>
                <div className="footer-column">
                    <h3>Horarios de atención</h3>
                    <p>Lunes a Viernes<br />8:00 a.m. - 5:00 p.m.<br />Sábados y festivos<br />
                        <span className='colorMark_Footer '>No se reciben solicitudes.</span></p>
                </div>
            </div>
            <div className="divisorFooter"></div>
            <div className="SocialNetWorks_Footer">
                <div className="nada"></div>
                <div className="iconsFooter">
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-twitter-x"></i>
                    <i className="bi bi-facebook"></i>
                </div>
                <div className="textCopyFooter">
                    <span>© Copyright 2024 Miguel & Santiago Property</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
