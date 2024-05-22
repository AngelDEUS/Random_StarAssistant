import React from 'react'
import './MainLayout_styles.css'
import NavBar from '../NavBar/NavBar_Main'
import FooterMain from '../Footer/Footer_Main'
import CreadorEquipos from '../Creador_Equipos/CreadorDeEquipos'

const MainLayout = () => {
    return (
        <div>
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
