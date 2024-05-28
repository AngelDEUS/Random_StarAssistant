import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import './TablaGenerada.css'
import MiLogoHeader from '../../../Assets/Logo_Black.png';

import { saveAs } from 'file-saver';
import { Packer, Document, Paragraph, AlignmentType } from "docx";


const TablaGenerada = ({ equipos }) => {

    const generatePDF = () => {
        const doc = new jsPDF();
        const logo = new Image();
        logo.src = MiLogoHeader;

        // Agregar el encabezado
        doc.addImage(logo, 'PNG', 150, 10, 15, 15); // Ajusta el tamaño y posición del logo según sea necesario
        doc.setFontSize(16);
        doc.text('Equipos generados', 10, 20);
        doc.setFontSize(12);
        doc.text(`Número de grupos generados: ${equipos.length}`, 10, 30);
        doc.text('Eventos registrados', 10, 40);
        doc.text(`Número de eventos registrados: ${equipos.length}`, 10, 50);

        equipos.forEach((equipo, index) => {
            if (index !== 0) doc.addPage(); // Nueva página para cada equipo

            // Encabezado de la tabla
            doc.setFontSize(14);
            doc.setFillColor(0, 0, 0); // Color de fondo oscuro
            doc.setTextColor(255, 255, 255); // Texto blanco
            doc.rect(10, 60, 190, 10, 'F');
            doc.text(`Equipo ${index + 1}`, 15, 67);

            // Información del equipo
            const teamInfo = [
                ['Líder de Evento', `${equipo.lider.nombres} ${equipo.lider.apellidos}`, 'Duración del evento', `${equipo.tiempoCalculado.horas} hr. - ${equipo.tiempoCalculado.minutos} min.`],
                ['Presupuesto', `$ ${equipo.presupuestoEvento}`, 'Lugar', `${equipo.lugarEvento}`],
                ['Fecha y Hora de Inicio', `${equipo.fechaInicio} - ${equipo.horaInicio}`, 'Fecha y Hora de Cierre', `${equipo.fechaCierre} - ${equipo.horaCierre}`]
            ];

            // Verificación visual de datos antes de pasarlos a autoTable
            console.log('Team Info:', teamInfo);

            doc.autoTable({
                startY: 70,
                head: [['', '', '', '']],
                body: teamInfo,
                theme: 'plain',
                styles: { fontSize: 10, cellPadding: 2 },
                columnStyles: { 0: { fontStyle: 'bold', cellWidth: 45 }, 2: { fontStyle: 'bold', cellWidth: 45 } }
            });

            // Título de la lista de asistentes
            doc.setFontSize(14);
            doc.setFillColor(128, 128, 128); // Color de fondo oscuro
            doc.setTextColor(255, 255, 255); // Texto blanco
            const startY = doc.lastAutoTable.finalY + 10;
            doc.rect(10, startY, 190, 10, 'F');
            doc.text('Lista de asistentes', 15, startY + 7);

            // Tabla de asistentes
            const asistentesData = equipo.asistentes.map((asistente, idx) => [
                idx + 1,
                asistente.ID_Asistente,
                asistente.Nombres,
                asistente.Apellidos,
                asistente.Correo,
                asistente.Telefono
            ]);

            // Verificación visual de datos de asistentes antes de pasarlos a autoTable
            console.log('Asistentes Data:', asistentesData);

            doc.autoTable({
                startY: startY + 20,
                head: [['N°', 'ID', 'Nombres', 'Apellidos', 'Correo', 'Teléfono']],
                body: asistentesData,
                theme: 'grid',
                styles: { fontSize: 10, cellPadding: 2 },
                headStyles: { fillColor: [128, 128, 128], textColor: [255, 255, 255] },
                columnStyles: {
                    0: { cellWidth: 10 },
                    1: { cellWidth: 30 },
                    2: { cellWidth: 30 },
                    3: { cellWidth: 30 },
                    4: { cellWidth: 60 },
                    5: { cellWidth: 30 }
                }
            });
        });

        // Obtener la fecha y hora actual
        const date = new Date();
        const dateStr = date.toISOString().slice(0, 10);
        const timeStr = date.toTimeString().slice(0, 8).replace(/:/g, '_');
        const fileName = `Assistant-Equipo(${dateStr}-${timeStr}).pdf`;

        doc.save(fileName);
    };

    const generateWordDoc = () => {
        const doc = new Document();
    
        // Agregar la sección de equipos
        equipos.forEach((equipo, index) => {
            if (equipo && equipo.lider && equipo.tiempoCalculado) { // Verificar que equipo, equipo.lider y equipo.tiempoCalculado estén definidos
                doc.addSection({
                    children: [
                        new Paragraph({
                            text: `Equipo ${index + 1}`,
                            heading: "Heading2",
                            alignment: AlignmentType.CENTER
                        }),
                        new Paragraph({
                            text: `Líder de Evento: ${equipo.lider.nombres} ${equipo.lider.apellidos}`
                        }),
                        new Paragraph({
                            text: `Duración del evento: ${equipo.tiempoCalculado.horas} hr. - ${equipo.tiempoCalculado.minutos} min.`
                        }),
                        // Agrega más información sobre el equipo según sea necesario
                    ]
                });
            }
        });
    
        // Convertir el documento a blob y guardarlo
        Packer.toBlob(doc).then(blob => {
            saveAs(blob, `Assistant-Equipo(${new Date().toISOString().slice(0, 10)}-${new Date().toTimeString().slice(0, 8).replace(/:/g, '_')}).docx`);
        });
    };
    
    
    




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
                    <button className='btnHeader_TabGen' onClick={generatePDF}>
                        <i className="bi bi-file-earmark-pdf"></i>
                    </button>
                    {/* <button className='btnHeader_TabGen' onClick={generateWordDoc}>
                        <i className="bi bi-file-earmark-word"></i>
                    </button> */}
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
                                <span className='ColorGreen'>{equipo.tiempoCalculado.horas} hr. - {equipo.tiempoCalculado.minutos} min.</span>
                            </div>
                            <div className="sepVer_TableGen"></div>
                            <div className="ResumenHeader">
                                <span>Presupuesto del Evento</span>
                                <span className='ColorGreen'>${equipo.presupuestoEvento}</span>
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
                                {equipo.lider && (
                                    <>
                                        <span className='id_Lider'>{equipo.lider.id_lider}</span>
                                        <span className='Nombre_Lider'>{equipo.lider.nombres}</span>
                                        <span className='Apellido_Lider'>{equipo.lider.apellidos}</span>
                                    </>
                                )}
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
                                                <td>{asistente.ID_Asistente}</td>
                                                <td>{asistente.Nombres}</td>
                                                <td>{asistente.Apellidos}</td>
                                                <td>{asistente.Correo}</td>
                                                <td>{asistente.Telefono}</td>
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
