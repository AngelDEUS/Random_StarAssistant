import React from 'react'
import './MainLayout_styles.css'
import NavBar from '../NavBar/NavBar_Main'
import FooterMain from '../Footer/Footer_Main'
import CreadorEquipos from '../Creador_Equipos/CreadorDeEquipos'
import Modal_evento from '../Creador_Equipos/modal_evento/modal_evento'

const MainLayout = () => {
    return (
        <div>
            <Modal_evento />
            <div className="NavBar_Layout">
                <NavBar />
            </div>
            <div className="ContentCenter_Layout">
                <CreadorEquipos />
            </div>
            <div className="Footer_Layout">
                <FooterMain />
            </div>
        </div>
    )
}

export default MainLayout
