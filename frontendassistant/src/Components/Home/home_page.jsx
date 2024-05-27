import React from 'react'
import './home_page_styles.css'

const HomePage = () => {
  return (
    <div className='home_container'>
      <div className="content_home">
        <div className="infoTop_home">
          <div className="left_infoTop_Home">
            <h1 className="titlHome_1">Sea bienvenido a</h1>
            <h1 className="titlHome_2">Random.Star.Assistant</h1>
            <button className="AprendeMas_btnHome">
              Aprende más
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className="right_infoTop_Home">
            <p className="mensaje_home">
              El Sistema que le permitirá crea listas aleatorias grupos de asistentes, generando una combinación única e interesante, todos rotan de escuadra y todos son puestos a prueba, tu eliges los equipos que funcionan.
            </p>
            <div className="consultasGrups_home">
              <div className="grupConsulta_sumario">
                <span className='sumario_home'>+20</span>
                <span className='text_sumario_home'>Líderes registrados</span>
              </div>
              <div className="grupConsulta_sumario">
                <span className='sumario_home'>+45</span>
                <span className='text_sumario_home'>Asistentes registrados</span>
              </div>
              <div className="grupConsulta_sumario">
                <span className='sumario_home'>+450</span>
                <span className='text_sumario_home'>Eventos realizados</span>
              </div>
            </div>
          </div>
        </div>
        <div className="quepuedeshacercon">
          <div className="grupCard_quepuedes">
            <i className="bi bi-people"></i>
            <span className="textCard_home">Manejo de Equipos de trabajo.</span>
          </div>
          <div className="grupCard_quepuedes">
            <i className="bi bi-save2"></i>
            <span className="textCard_home">Guardar Registros de presupuestos.</span>
          </div>
          <div className="grupCard_quepuedes">
            <i className="bi bi-hourglass-split"></i>
            <span className="textCard_home">Manejar de lapsos de tiempo para la agenda.</span>
          </div>
          <div className="grupCard_quepuedes">
            <i className="bi bi-check-circle"></i>
            <span className="textCard_home">Escoger entre diferentes tipos de eventos.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
