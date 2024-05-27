import React, { useState } from 'react';

const ModalLider = ({ onClose, onSelectLeader }) => {
    const listaLideres = [
        { id: 1, nombre: 'Juan Pérez' },
        { id: 2, nombre: 'María González' },
        { id: 3, nombre: 'Pedro López' },
        // Agrega más líderes según sea necesario
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLideres, setFilteredLideres] = useState(listaLideres);
    const [selectedLeader, setSelectedLeader] = useState(null);

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
        const filtered = listaLideres.filter((lider) =>
            lider.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredLideres(filtered);
    };

    return (
        <div className='container_Modal'>
            <div className="modal_center">
                <div className="up_modal">
                    <h3 className="title_modal_h3">Seleccionar un líder</h3>
                    <div className="modal_divisor"></div>
                    <input
                        type="text"
                        className="search_input"
                        placeholder="Buscar líder..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="cuerpo_modal">
                    <div className="modal_divisor"></div>
                    <table className="leader-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredLideres.map((lider) => (
                                <tr key={lider.id}>
                                    <td>{lider.id}</td>
                                    <td>{lider.nombre}</td>
                                    <td>
                                        <button
                                            className="select-button"
                                            onClick={() => handleLeaderChange(lider)}
                                            disabled={selectedLeader && selectedLeader.id === lider.id}
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
