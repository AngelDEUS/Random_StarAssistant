import React from 'react'
import './modal_evento.css'

const Modal_evento = () => {

    const lista_Eventos = ['Conferencia','sociales', 
    'administración central y/o local', 'deportivos', 
    'empresa y corporativos', 'causa y de recaudación de fondos', 
    'Espectáculos y eventos de ocio', 'Reuniones o convenciones']

    return (
        <div className='conainer_Modal'>
            <div className="modal_center">
                <div className="up_modal">
                    <h3 className="title_modal_h3">Escoja un tipo de evento</h3>
                    <div className="modal_divisor"></div>
                    <span className="span_modal_text">Por favor Escoja un tipo de evento de la lista y de clic en el botón de escoger.</span>
                </div>
                <div className="cuerpo_modal">
                    <div className="modal_divisor"></div>
                    <div className="checkButtons_modal">
                        {lista_Eventos.map((evento, index) => (
                            <label key={index} className="radioLabel">
                                <input type="radio" name="tipo_evento" value={evento} className="opModalEvento" />
                                <span className="customRadio"></span>
                                {evento}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="bottom_modal">
                    <div className="modal_divisor"></div>
                    <div className="buttons_modal">
                        <button className='btn_Modal_ escoger_mdl'>Escoger Tipo de evento</button>
                        <button className='btn_Modal_ cancelar_mdl'>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal_evento
