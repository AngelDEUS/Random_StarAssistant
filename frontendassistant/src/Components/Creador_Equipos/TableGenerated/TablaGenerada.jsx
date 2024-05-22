import React from 'react'
import './TablaGenerada.css'
// Rama Angel_tables


const TablaGenerada = () => {
    return (
        <div className='TablaGenerada_MAIN'>
            <div className="Header_TabGen borderTable_SS">
                <div className="InfoHeader_TabGen">
                    <span className='Text_Header_TabGen'>Equipos Generados</span>
                    <span className='Text_Count_Header'>1</span>
                </div>
                <div className="leftHeader_Tab">
                    <div className="sepVer_TableGen"></div>
                    <div className="ResumenHeader">
                        <span>Eventos Generados</span>
                        <span className='ColorGreen'>1</span>
                    </div>
                    <div className="sepVer_TableGen"></div>
                    <div className="buttons_Header_TabGen">
                        <button className='btnHeader_TabGen'>
                            <i class="bi bi-file-earmark-pdf"></i>
                        </button>
                        <button className='btnHeader_TabGen'>
                            <i class="bi bi-file-earmark-word"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="sepDot3">
                <i className="bi bi-three-dots"></i>
            </div>
            <div className="tablaGenerada_Cuerpo">
                <div className="tableGenerated_Inside">
                    <div className="Header_TabGen2">
                        <div className="InfoHeader_TabGen">
                            <span className='Text_Header_TabGen'>Equipo</span>
                            <span className='Text_Count_Header'>1</span>
                        </div>
                        <div className="leftHeader_Tab">
                            <div className="sepVer_TableGen"></div>
                            <div className="ResumenHeader">
                                <span>Duración del Evento</span>
                                <span className='ColorGreen'>5 horas</span>
                            </div>
                            <div className="sepVer_TableGen"></div>
                            <div className="ResumenHeader">
                                <span>Presupuesto del Evento</span>
                                <span className='ColorGreen'>$ 1'000.000</span>
                            </div>
                            <div className="sepVer_TableGen"></div>
                            <div className="buttons_Header_TabGen">
                                <button className='btnHeader_TabGen'>
                                    <i class="bi bi-file-earmark-pdf"></i>
                                </button>
                                <button className='btnHeader_TabGen'>
                                    <i class="bi bi-file-earmark-word"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="Content_TablaGenerated">
                        <div className="topGenerated">
                            <div className="leftGenTab">
                                <div className="infoContainerSS">
                                    <div className="Tittle_Container">
                                        <span className='text_SS'>Luegar del evento</span>
                                    </div>
                                    <div className="sepVertical_SS"></div>
                                    <div className="respuesta_Container">
                                        <span className='text_SS'>Calle 37 Sur #78 b - 37</span>
                                    </div>
                                </div>
                                <div className="infoContainerSS">
                                    <div className="Tittle_Container">
                                        <span className='text_SS'>Fecha y Hora de Inicio</span>
                                    </div>
                                    <div className="sepVertical_SS"></div>
                                    <div className="respuesta_Container">
                                        <span className='text_SS'>17/05/2024 - 13:00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="RightGenTab">
                                <div className="infoContainerSS">
                                    <div className="Tittle_Container">
                                        <span className='text_SS'>Presupuesto del evento</span>
                                    </div>
                                    <div className="sepVertical_SS"></div>
                                    <div className="respuesta_Container">
                                        <span className='text_SS'>$ 1'000.000</span>
                                    </div>
                                </div>
                                <div className="infoContainerSS">
                                    <div className="Tittle_Container">
                                        <span className='text_SS'>Fecha y Hora de Cierre</span>
                                    </div>
                                    <div className="sepVertical_SS"></div>
                                    <div className="respuesta_Container">
                                        <span className='text_SS'>17/05/2024 - 17:00</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="center_Generated">
                            <div className="SepEquipo">
                                <span className='textSepEquip'>Equipo<i className="bi bi-chevron-right"></i></span>
                                <div className="lineSEP_GEN"></div>
                            </div>
                            <div className="SepEquipo">
                                <div className="lineSEP_GEN"></div>
                                <span className='textSepEquip'>Líder del Equipo</span>
                                <div className="lineSEP_GEN"></div>
                            </div>
                            <div className="liderContent">
                                <span className='id_Lider'>10458657555</span>
                                <span className='Nombre_Lider'>Andres Santiago</span>
                                <span className='Apellido_Lider'>Moreno Pineda</span>
                            </div>
                            <div className="SepEquipo">
                                <div className="lineSEP_GEN"></div>
                                <span className='textSepEquip'>Asistentes</span>
                                <div className="lineSEP_GEN"></div>
                            </div>
                            <div className="Table_Equipo_Content">
                                <table className='TableGen_Equipo'>
                                    <thead>
                                        <tr className='TableRouw_Tittles'>
                                            <th>N°</th>
                                            <th>ID</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Correo</th>
                                            <th>Teléfono de contacto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='TableRouw_Resultado'>
                                            <td className='numberColumn'>1</td>
                                            <td>1305040605</td>
                                            <td>Nombres Completos</td>
                                            <td>Apellidos Completos</td>
                                            <td>CorreoCompleto@gmail.com</td>
                                            <td>322 3575221</td>
                                        </tr>
                                        <tr className='TableRouw_Resultado'>
                                            <td className='numberColumn'>1</td>
                                            <td>1305040605</td>
                                            <td>Nombres Completos</td>
                                            <td>Apellidos Completos</td>
                                            <td>CorreoCompleto@gmail.com</td>
                                            <td>322 3575221</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TablaGenerada
