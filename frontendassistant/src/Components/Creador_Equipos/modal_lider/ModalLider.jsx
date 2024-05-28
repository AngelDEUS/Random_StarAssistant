import React, { useState, useEffect } from 'react';
import './modal_lider.css'

const ModalLider = ({ onClose, onSelectLeader }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLideres, setFilteredLideres] = useState([]);
    const [selectedLeader, setSelectedLeader] = useState(null);

    console.log('lider seleccionado: ', selectedLeader);
    useEffect(() => {
        fetchLeaders();
    }, []);

    const fetchLeaders = async () => {
        try {
            const response = await fetch('http://localhost:3001/asistente/td_lideres');
            const data = await response.json();
            setFilteredLideres(data);
        } catch (error) {
            console.error('Error al buscar los lideres:', error);
        }
    };

    const handleLeaderChange = (leader) => {
        setSelectedLeader(leader);
    };

    const handleSelect = () => {
        if (selectedLeader) {
            onSelectLeader(selectedLeader);
            onClose(); // Cerrar el modal después de seleccionar
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        const filtered = filteredLideres.filter((lider) =>
            lider.Nombre.toLowerCase().includes(e.target.value.toLowerCase()) ||
            lider.Apellido.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredLideres(filtered);
    };

    return (
        <div className='container_Modal'>
            <div className="modal_center">
                <div className="up_modal">
                    <h3 className="title_modal_h3">Seleccionar un líder</h3>
                    <div className="modal_divisor"></div>
                    <div className="inputBuscar_Container">
                        <input
                            type="text"
                            className="search_input"
                            placeholder="Buscar líder..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button className="buscarBTN_modal">
                            <i className="bi bi-search"></i>
                            Limpiar
                        </button>
                    </div>
                </div>
                <div className="cuerpo_modal">
                    <div className="modal_divisor"></div>
                    <table className="leader-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredLideres.map((lider) => (
                                <tr key={lider.ID}>
                                    <td>{lider.ID}</td>
                                    <td>{lider.Nombre}</td>
                                    <td>{lider.Apellido}</td>
                                    <td>
                                        <button
                                            className="select-button"
                                            onClick={() => handleLeaderChange(lider)}
                                            disabled={selectedLeader && selectedLeader.ID === lider.ID}
                                        >
                                            Seleccionar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bottom_modal">
                    <div className="modal_divisor"></div>
                    <div className="buttons_modal">
                        <button className='btn_Modal_ escoger_mdl' onClick={handleSelect}>Seleccionar líder</button>
                        <button className='btn_Modal_ cancelar_mdl' onClick={onClose}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalLider;
