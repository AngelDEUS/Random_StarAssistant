import React, { useState } from 'react';
import './modal_evento.css';

const ModalEvento = ({ onClose, onSelectEvent }) => {
    const lista_Eventos = [
        'Conferencia',
        'Sociales',
        'Administración central y/o local',
        'Deportivos',
        'Empresa y corporativos',
        'Causa y de recaudación de fondos',
        'Espectáculos y eventos de ocio',
        'Reuniones o convenciones'
    ];

    const [selectedEvent, setSelectedEvent] = useState('');

    const handleEventChange = (event) => {
        setSelectedEvent(event.target.value);
    };

    const handleSelect = () => {
        onSelectEvent(selectedEvent);
    };

    return (
        <div className='container_Modal'>
            <div className="modal_center">
                <div className="up_modal">
                    <h3 className="title_modal_h3">Escoja un tipo de evento</h3>
                    <div className="modal_divisor"></div>
                    <span className="span_modal_text">Por favor escoja un tipo de evento de la lista y haga clic en el botón de escoger.</span>
                </div>
                <div className="cuerpo_modal">
                    <div className="modal_divisor"></div>
                    <div className="checkButtons_modal">
                        {lista_Eventos.map((evento, index) => (
                            <label key={index} className="radioLabel">
                                <input
                                    type="radio"
                                    name="tipo_evento"
                                    value={evento}
                                    className="opModalEvento"
                                    checked={selectedEvent === evento}
                                    onChange={handleEventChange}
                                />
                                <span className="customRadio"></span>
                                {evento}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="bottom_modal">
                    <div className="modal_divisor"></div>
                    <div className="buttons_modal">
                        <button className='btn_Modal_ escoger_mdl' onClick={handleSelect}>Escoger Tipo de evento</button>
                        <button className='btn_Modal_ cancelar_mdl' onClick={onClose}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalEvento;
