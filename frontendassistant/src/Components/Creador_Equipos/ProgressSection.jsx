import React from 'react';

const ProgressSection = ({ handleCrearGrupo }) => {
    return (
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
    );
};

export default ProgressSection;
