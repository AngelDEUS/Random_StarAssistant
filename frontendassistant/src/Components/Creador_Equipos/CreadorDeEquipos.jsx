import React, { useState, useEffect } from 'react';
import './styles_CreadorEquipos.css';
import TablaGenerada from './TableGenerated/TablaGenerada';
import ModalEvento from './modal_evento/modal_evento';
import ModalLider from './modal_lider/ModalLider';
import Swal from 'sweetalert2';


const CreadorDeEquipos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEventType, setSelectedEventType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [timeDifference, setTimeDifference] = useState(null);
    const [presupuesto, setPresupuesto] = useState('');
    const [numAsistentes, setNumAsistentes] = useState('');
    const [direccion, setDireccion] = useState('');
    const [equiposGenerados, setEquiposGenerados] = useState([]);
    const [listaLideres, setListaLideres] = useState([]);

    const [isModalLiderOpen, setIsModalLiderOpen] = useState(false);
    const [selectedLeader, setSelectedLeader] = useState(null);

    const fetchLeaders = async () => {
        try {
            const response = await fetch('http://localhost:3001/asistente/td_lideres');
            const data = await response.json();
            setListaLideres(data);
        } catch (error) {
            console.error('Error fetching leaders:', error);
        }
    };

    useEffect(() => {
        fetchLeaders();
    }, []);

    console.log('---> Lider seleccionado desde el creador de equipos: ', selectedLeader);
    // Manejador de eventos __ para abrir el modal de líderes
    const handleOpenModalLider = () => {
        setIsModalLiderOpen(true);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSelectEventType = (eventType) => {
        setSelectedEventType(eventType);
        handleCloseModal();
    };

    const showErrorAlert = (message) => {
        Swal.fire({
            title: 'Error',
            text: message,
            icon: 'error',
            confirmButtonText: 'OK',
            background: '#343a40',
            color: '#ffffff',
            confirmButtonColor: '#dc3545'
        });
    };

    const addSlashToDate = (value, setState) => {
        const formattedValue = value
            .replace(/\D/g, '') 
            .replace(/^(\d{2})/, '$1/') 
            .replace(/^(\d{2}\/\d{2})/, '$1/'); 
        setState(formattedValue);
    };

    const addColonToTime = (value, setState, inputType) => {
        const formattedValue = value
            .replace(/\D/g, '')
            .replace(/^(\d{2})/, '$1:');
        const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!timeRegex.test(formattedValue) && formattedValue.length === 5) {
            const errorMessage = inputType === 'start' ? 'Hora de inicio inválida. Use el formato HH:MM.' : 'Hora de fin inválida. Use el formato HH:MM.';
            showErrorAlert(errorMessage);
            return;
        }
        setState(formattedValue);
    };

    const handleStartDateChange = (e) => {
        addSlashToDate(e.target.value, setStartDate);
    };

    const handleStartTimeChange = (e) => {
        addColonToTime(e.target.value, setStartTime, 'start');
    };

    const handleEndDateChange = (e) => {
        addSlashToDate(e.target.value, setEndDate);
    };

    const handleEndTimeChange = (e) => {
        addColonToTime(e.target.value, setEndTime, 'end');
    };

    const validateDateTime = (date, time) => {
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        const timeRegex = /^\d{2}:\d{2}$/;
        return dateRegex.test(date) && timeRegex.test(time);
    };

    const calculateTimeDifference = () => {
        if (!validateDateTime(startDate, startTime)) {
            showErrorAlert('Fecha u hora de inicio inválida. Por favor use el formato DD/MM/AAAA y HH:MM.');
            return;
        }

        if (!validateDateTime(endDate, endTime)) {
            showErrorAlert('Fecha u hora de fin inválida. Por favor use el formato DD/MM/AAAA y HH:MM.');
            return;
        }

        const [startDay, startMonth, startYear] = startDate.split('/');
        const [startHours, startMinutes] = startTime.split(':');
        const [endDay, endMonth, endYear] = endDate.split('/');
        const [endHours, endMinutes] = endTime.split(':');

        const startDateTime = new Date(`${startYear}-${startMonth}-${startDay}T${startHours}:${startMinutes}`);
        const endDateTime = new Date(`${endYear}-${endMonth}-${endDay}T${endHours}:${endMinutes}`);

        if (startDateTime >= endDateTime) {
            showErrorAlert('La fecha de inicio debe ser anterior a la fecha de fin.');
            return;
        }

        const diffMilliseconds = endDateTime - startDateTime;
        const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));

        setTimeDifference({ horas: diffHours, minutos: diffMinutes });
        Swal.fire({
            title: 'Diferencia de tiempo',
            text: `Horas: ${diffHours}, Minutos: ${diffMinutes}`,
            icon: 'info',
            confirmButtonText: 'OK',
            background: '#343a40',
            color: '#ffffff',
            confirmButtonColor: '#28a745'
        });
    };

    const handlePresupuestoChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (!isNaN(value) && value !== '') {
            setPresupuesto(value);
        } else {
            setPresupuesto('');
        }
    };

    const handleNumAsistentesChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setNumAsistentes(value);
        } else {
            setNumAsistentes('');
        }
    };

    const handleDireccionChange = (e) => {
        setDireccion(e.target.value);
    };



    const validateFields = () => {
        if (selectedEventType === '') {
            showErrorAlert('Debe seleccionar un tipo de evento.');
            return false;
        }
    
        if (!validateDateTime(startDate, startTime) || !validateDateTime(endDate, endTime)) {
            showErrorAlert('Fecha u hora inválida. Por favor use el formato DD/MM/AAAA y HH:MM.');
            return false;
        }
    
        if (direccion.trim() === '') {
            showErrorAlert('La dirección no puede estar vacía.');
            return false;
        }
    
        if (presupuesto === '' || parseInt(presupuesto, 10) < 0) {
            showErrorAlert('El presupuesto no puede ser menor que cero.');
            return false;
        }
    
        if (numAsistentes === '' || parseInt(numAsistentes, 10) < 0) {
            showErrorAlert('El número de asistentes no puede ser menor que cero.');
            return false;
        }
    
        if (!selectedLeader || !selectedLeader.Nombre || !selectedLeader.Apellido) {
            showErrorAlert('Debe seleccionar un líder válido.');
            return false;
        }
    
        return true;
    };
    const handleGenerarEquipos = async () => {
        try {
            if (numAsistentes) {
                const response = await fetch(`http://localhost:3001/asistente/generar_equipos?numAsistentes=${numAsistentes}`);
                const data = await response.json();

                const lider = {
                    id_lider: selectedLeader.ID,
                    nombres: selectedLeader.Nombre,
                    apellidos: selectedLeader.Apellido,
                };

                const equipo = {
                    tiempoCalculado: timeDifference,
                    tipoEvento: selectedEventType,
                    duracionEvento: `${startDate} ${startTime} - ${endDate} ${endTime}`,
                    presupuestoEvento: presupuesto,
                    lugarEvento: direccion,
                    fechaInicio: startDate,
                    horaInicio: startTime,
                    fechaCierre: endDate,
                    horaCierre: endTime,
                    lider: lider,
                    asistentes: data
                };

                setEquiposGenerados(prevEquipos => [...prevEquipos, equipo]); // Agregar nuevo equipo al array existente
            }
        } catch (error) {
            console.error('Error al generar equipos:', error);
        }
    };

    const handleCrearGrupo = async () => {
        if (validateFields()) {
            await handleGenerarEquipos();
            Swal.fire({
                title: 'Grupo Creado',
                text: 'El grupo se ha creado exitosamente.',
                icon: 'success',
                confirmButtonText: 'OK',
                background: '#343a40',
                color: '#ffffff',
                confirmButtonColor: '#28a745'
            });
        }
    };

    // const handleBorrarEquipos = () => {
    //     setEquiposGenerados([]);
    // };
    

    const handleSelectLeader = (leader) => {
        setSelectedLeader(leader);
    };

    return (
        <>
            {isModalOpen && (
                <ModalEvento
                    onClose={handleCloseModal}
                    onSelectEvent={handleSelectEventType}
                />
            )}
            {isModalLiderOpen && (
                <ModalLider
                    onClose={() => setIsModalLiderOpen(false)}
                    onSelectLeader={handleSelectLeader}
                    listaLideres={listaLideres}
                />
            )}
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
                                        style={{width: '85px'}}
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
                                        style={{width: '85px'}}
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
                            <div className="form-item_right" onClick={handleOpenModalLider}>
                                <span>{selectedLeader ? `${selectedLeader.Nombre} ${selectedLeader.Apellido}` : 'Seleccionar líder'}</span>
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
                            <p className="TextMessage">Solo queda crear un grupo increíble.</p>
                        </div>
                    </div>
                    <button className="create-button" onClick={handleCrearGrupo}>
                        ¡CREAR GRUPO!
                    </button>
                    <div className="abajo_button-CrearGrupo">
                        <i className="bi bi-chevron-compact-down"></i>
                    </div>
                </section>
                <section className='TablaGenerada_Creador'>                   
                {equiposGenerados.map((equipo, index) => (
                        <TablaGenerada key={index} equipos={[equipo]} />
                    ))}
                </section>
            </main>
        </>
    );
};

export default CreadorDeEquipos;
