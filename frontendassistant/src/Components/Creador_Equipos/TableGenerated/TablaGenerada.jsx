import React from 'react';
import './TablaGenerada.css';

const TablaGenerada = ({ equipos }) => {
    const {
        tiempoCalculado = '',
        tipoEvento = '',
        duracionEvento = '',
        presupuestoEvento = '',
        lugarEvento = '',
        fechaInicio = '',
        horaInicio = '',
        fechaCierre = '',
        horaCierre = '',
        liderEquipo = { id: '', nombres: '', apellidos: '' },
        asistentes = []
    } = equipos || {};

    // Imprimir los datos desestructurados en la consola para verificar
    console.log('Tiempo calculado:', tiempoCalculado);
    console.log('Tipo de evento:', tipoEvento);
    console.log('Duración del evento:', duracionEvento);
    console.log('Presupuesto del evento:', presupuestoEvento);
    console.log('Lugar del evento:', lugarEvento);
    console.log('Fecha y hora de inicio:', fechaInicio, horaInicio);
    console.log('Fecha y hora de cierre:', fechaCierre, horaCierre);
    console.log('Líder del equipo:', liderEquipo);
    console.log('Asistentes:', asistentes);
    return (
        <div className='TablaGenerada_MAIN'>
            <div className="Header_TabGen borderTable_SS">
                <div className="InfoHeader_TabGen">
                    <span className='Text_Header_TabGen'>Equipos Generados</span>
                    <span className='Text_Count_Header'>{equipos.length}</span>
                </div>
                <div className="leftHeader_Tab">
                    <div className="sepVer_TableGen"></div>
                    <div className="ResumenHeader">
                        <span>Eventos Generados</span>
                        <span className='ColorGreen'>{equipos.length}</span>
                    </div>
                    <div className="sepVer_TableGen"></div>
                    <div className="buttons_Header_TabGen">
                        <button className='btnHeader_TabGen'>
                            <i className="bi bi-file-earmark-pdf"></i>
                        </button>
                        <button className='btnHeader_TabGen'>
                            <i className="bi bi-file-earmark-word"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="sepDot3">
                <i className="bi bi-three-dots"></i>
            </div>
            {Array.isArray(equipos) && equipos.map((equipo, index) => (
                <div key={index} className="tablaGenerada_Cuerpo">
                    <div className="tableGenerated_Inside">
                        <div className="Header_TabGen2">
                            <div className="InfoHeader_TabGen">
                                <span className='Text_Header_TabGen'>Equipo</span>
                                <span className='Text_Count_Header'>{index + 1}</span>
                            </div>
                            <div className="leftHeader_Tab">
                                <div className="sepVer_TableGen"></div>
                                <div className="ResumenHeader">
                                    <span>Duración del Evento</span>
                                    <span className='ColorGreen'>{equipo.duracionEvento}</span> {/* Debes calcularlo */}
                                </div>
                                <div className="sepVer_TableGen"></div>
                                <div className="ResumenHeader">
                                    <span>Presupuesto del Evento</span>
                                    <span className='ColorGreen'>{equipo.presupuestoEvento}</span>
                                </div>
                            </div>
                        </div>
                        <div className="Content_TablaGenerated">
                            <div className="topGenerated">
                                <div className="leftGenTab">
                                    <div className="infoContainerSS">
                                        <div className="Tittle_Container">
                                            <span className='text_SS'>Lugar del evento</span>
                                        </div>
                                        <div className="sepVertical_SS"></div>
                                        <div className="respuesta_Container">
                                            <span className='text_SS'>{equipo.lugarEvento}</span>
                                        </div>
                                    </div>
                                    <div className="infoContainerSS">
                                        <div className="Tittle_Container">
                                            <span className='text_SS'>Fecha y Hora de Inicio</span>
                                        </div>
                                        <div className="sepVertical_SS"></div>
                                        <div className="respuesta_Container">
                                            <span className='text_SS'>{equipo.fechaInicio} - {equipo.horaInicio}</span>
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
                                            <span className='text_SS'>{equipo.presupuestoEvento}</span>
                                        </div>
                                    </div>
                                    <div className="infoContainerSS">
                                        <div className="Tittle_Container">
                                            <span className='text_SS'>Fecha y Hora de Cierre</span>
                                        </div>
                                        <div className="sepVertical_SS"></div>
                                        <div className="respuesta_Container">
                                            <span className='text_SS'>{equipo.fechaCierre} - {equipo.horaCierre}</span>
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
                                    <span className='id_Lider'>{equipo.liderEquipo.id}</span>
                                    <span className='Nombre_Lider'>{equipo.liderEquipo.nombres}</span>
                                    <span className='Apellido_Lider'>{equipo.liderEquipo.apellidos}</span>
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
                                            {equipo.asistentes && equipo.asistentes.map((asistente, idx) => (
                                                <tr key={idx} className='TableRouw_Resultado'>
                                                    <td className='numberColumn'>{idx + 1}</td>
                                                    <td>{asistente.id}</td>
                                                    <td>{asistente.nombres}</td>
                                                    <td>{asistente.apellidos}</td>
                                                    <td>{asistente.correo}</td>
                                                    <td>{asistente.telefono}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TablaGenerada;
