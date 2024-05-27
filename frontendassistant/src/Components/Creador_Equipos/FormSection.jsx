import React, { useState } from 'react';
import ModalEvento from './ModalEvento';

const FormSection = ({
    selectedEventType,
    startDate,
    startTime,
    endDate,
    endTime,
    handleStartDateChange,
    handleStartTimeChange,
    handleEndDateChange,
    handleEndTimeChange,
    calculateTimeDifference,
    direccion,
    handleDireccionChange,
    presupuesto,
    handlePresupuestoChange,
    lider,
    handleLiderChange,
    numAsistentes,
    handleNumAsistentesChange,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        {isModalOpen && (
            <ModalEvento onClose={handleCloseModal} />
        )}
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
                        <div className="form-item_right" onClick={handleOpenModal}>
                            <span>Escoger tipo de evento: {selectedEventType || 'No seleccionado'}</span> <i className="bi bi-chevron-right"></i>
                        </div>
                        <div className="form-item_right-Hours">
                            Desde:
                            <div className="inputsHoraFecha">
                                <input
                                    type="text"
                                    placeholder="DD/MM/AAAA"
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                />
                                <span className='sepHoraFecha'>-</span>
                                <input
                                    type="text"
                                    placeholder="HH:MM"
                                    value={startTime}
                                    onChange={handleStartTimeChange}
                                />
                            </div>
                            <div className="sep_mini-borrar"></div>
                            Hasta:
                            <div className="inputsHoraFecha">
                                <input
                                    type="text"
                                    placeholder="DD/MM/AAAA"
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                />
                                <span className='sepHoraFecha'>-</span>
                                <input
                                    type="text"
                                    placeholder="HH:MM"
                                    value={endTime}
                                    onChange={handleEndTimeChange}
                                />
                            </div>
                            <button className='CancularDiferencia' onClick={calculateTimeDifference}>Calcular Diferencia</button>
                        </div>
                        <div className="form-item_right">
                            <input
                                type="text"
                                placeholder="Escriba la dirección, por ejemplo: Cl 37 Sur #73b"
                                value={direccion}
                                onChange={handleDireccionChange}
                            />
                        </div>
                        <div className="form-item_right">
                            <input
                                type="text"
                                placeholder="Escriba el presupuesto estimado"
                                value={`$${presupuesto}`}
                                onChange={handlePresupuestoChange}
                            />
                        </div>
                        <div className="form-item_right">
                            <input
                                type="text"
                                placeholder="Puede buscar por nombre o por ID"
                                value={lider}
                                onChange={handleLiderChange}
                            />
                        </div>
                        <div className="form-item_right">
                            <input
                                type="number"
                                placeholder="Escriba el número de asistentes para formar el grupo"
                                value={numAsistentes}
                                onChange={handleNumAsistentesChange}
                                min="0"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FormSection;
