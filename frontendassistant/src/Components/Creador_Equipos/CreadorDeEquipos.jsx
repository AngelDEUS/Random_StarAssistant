// MainContent.js
import React from 'react';
import './styles_CreadorEquipos.css'
import TablaGenerada from './TableGenerated/TablaGenerada';

const CreadorDeEquipos = () => {
    return (
        <main className="main-content">
            <section className="form-section">
                <div className="header_CreadorEq">
                    <div className="header_left-CreaEq">
                        <h2 className='Tittle_CreadorEquipos'>Creador de Equipos</h2>
                        <p className='Descripcion_CreadorEquipos'>Puede generar cuantas tablas quiera, pero debe tener en cuenta las condiciones para crear una tabla,
                            puede verlo en la pestaña de <span className='cursHeader_CreaEq'>¿Cómo usar?</span>
                        </p>
                    </div>
                    <div className="header_right-CreaEq">
                        <button className='btn_borrar_Table'>
                            <div className="iconContainer_borrarBTN">
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <div className="sep_mini-borrar"></div>
                            <span className='btnText_borrar'>Borrar</span>
                        </button>
                    </div>
                </div>
                <div className="form-container">
                    <div className="form-left">
                        <div className="form-item_tittle">
                            <span className="tittle_Input-form">Tipo de evento <i className="bi bi-chevron-right"></i></span>
                            <span className="sub_tittle_Input-form">Escoja el tipo de evento que se ajuste al evento
                                que asignará.</span>
                            <div className="separadorItem-Form"></div>
                        </div>
                        <div className="form-item_tittle">
                            <span className="tittle_Input-form">Rango de Fecha y Hora <i className="bi bi-chevron-right"></i></span>
                            <span className="sub_tittle_Input-form">Tenga en cuenta sus horarios laborales, podrá
                                escoger fecha de inicio y cierre del evento.</span>
                            <div className="separadorItem-Form"></div>
                        </div>
                        <div className="form-item_tittle">
                            <span className="tittle_Input-form">Ubicación <i className="bi bi-chevron-right"></i></span>
                            <span className="sub_tittle_Input-form">Coloque una ubicación del evento para
                                tener en cuenta en el informe.</span>
                            <div className="separadorItem-Form"></div>
                        </div>
                        <div className="form-item_tittle">
                            <span className="tittle_Input-form">Presupuesto <i className="bi bi-chevron-right"></i></span>
                            <span className="sub_tittle_Input-form">Coloque un presupuesto aproximado o
                                acordado con el cliente, para el informe.</span>
                            <div className="separadorItem-Form"></div>
                        </div>
                        <div className="form-item_tittle">
                            <span className="tittle_Input-form">Líder del grupo <i className="bi bi-chevron-right"></i></span>
                            <span className="sub_tittle_Input-form">Debe escoger un Líder para cada equipo de
                                trabajo, elija el líder mas acorde para el equipo.</span>
                            <div className="separadorItem-Form"></div>
                        </div>
                        <div className="form-item_tittle">
                            <span className="tittle_Input-form">Número de Asistentes <i className="bi bi-chevron-right"></i></span>
                            <span className="sub_tittle_Input-form">Tenga en cuenta que se elegirán aleatoriamente
                                los asistentes para este grupo.</span>
                            <div className="separadorItem-Form"></div>
                        </div>
                    </div>
                    <div className="form-right">
                        <div className="form-item_right">Escoger tipo de evento <i className="bi bi-chevron-right"></i></div>
                        <div className="form-item_right-Hours">
                            Desde:
                            <div className="inputsHoraFecha">
                                <input type="text" placeholder="DD/MM/AA" />
                                <span className='sepHoraFecha'>-</span>
                                <input type="text" placeholder="HH:MM:SS" />

                            </div>
                            <div className="sep_mini-borrar"></div>
                            Hasta:
                            <div className="inputsHoraFecha">
                                <input type="text" placeholder="DD/MM/AA" />
                                <span className='sepHoraFecha'>-</span>
                                <input type="text" placeholder="HH:MM:SS" />

                            </div>
                        </div>
                        <div className="form-item_right"><input type="text" placeholder="Escriba la dirección, por ejemplo: Cl 37 Sur #73b" /></div>
                        <div className="form-item_right"><input type="text" placeholder="Escriba el presupuesto estimado" /></div>
                        <div className="form-item_right"><input type="text" placeholder="Puede buscar por nombre o por ID" /></div>
                        <div className="form-item_right"><input type="text" placeholder="Escriba el número de asistentes para formar el grupo" /></div>
                    </div>
                </div>
            </section>
            <section className="progress-section">
                <div className="allMessage_Content">
                    <div className="pointsMessage_Content">
                        <div className="progress-steps">
                            <div className="cicleDIv activeCircle"><div className="step active"><i className="bi bi-star-fill"></i></div></div>
                            <div className="cicleDIv"><div className="step"></div></div>
                            <div className="cicleDIv"><div className="step"></div></div>
                            <div className="cicleDIv"><div className="step"></div></div>
                            <div className="cicleDIv"><div className="step"></div></div>
                            <div className="cicleDIv"><div className="step"></div></div>
                        </div>
                        <div className="sepMessage_Progress"></div>
                    </div>
                    <div className="messageCube">
                        <span className="Tittle_TextMessage">Todo se ve bien.</span>
                        <p className="TextMessage">solo queda crear un grupo increíble.</p>
                    </div>
                </div>
                <button className="create-button">
                    ¡CREAR GRUPO!
                </button>
                <div className="abajo_button-CrearGrupo">
                    <i class="bi bi-chevron-compact-down"></i>
                </div>
            </section>
            <section className='TablaGenerada_Creador'>
                <TablaGenerada />
            </section>
        </main>
    );
};

export default CreadorDeEquipos;
