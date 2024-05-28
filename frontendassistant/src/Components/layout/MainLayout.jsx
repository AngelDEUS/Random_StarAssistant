import React from 'react'
import './MainLayout_styles.css'
import NavBar from '../NavBar/NavBar_Main'
import FooterMain from '../Footer/Footer_Main'
import CreadorEquipos from '../Creador_Equipos/CreadorDeEquipos'
import HomePage from '../Home/home_page'
//import GestionUsuarios from '../Gestion_de_Usuarios/MainGestionUsuarios'
import { Route, Routes } from 'react-router-dom'
//import ComoUsar from '../comousar/ComoUsar'

const MainLayout = () => {
    return (
        <div>
            <div className="NavBar_Layout">
                <NavBar />
            </div>
            <div className="ContentCenter_Layout">
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/inicio' element={<HomePage/>}/>
                    <Route path='/creadorequipos' element={<CreadorEquipos/>}/>
                    <Route path='/gestionusuarios' element={<HomePage/>}/>
                    <Route path='/comousar' element={<HomePage/>}/>
                </Routes>
            </div>
            <div className="Footer_Layout">
                <FooterMain />
            </div>
        </div>
    )
}

export default MainLayout
