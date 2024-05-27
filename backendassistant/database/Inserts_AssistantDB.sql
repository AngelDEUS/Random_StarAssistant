/*
	* INSETRS AssitantDB
*/

USE AssitantDB;

-- 1 Lider.
INSERT INTO Lider (ID_Lider_PK, Nombres_Lider, Apellidos_Lider, Correo_Lider, Telefono_Lider) VALUES
('12345678901', 'Juan', 'Pérez', 'juan.perez@example.com', '3001234567'),
('23456789012', 'María', 'García', 'maria.garcia@example.com', '3002345678'),
('34567890123', 'Carlos', 'López', 'carlos.lopez@example.com', '3003456789'),
('45678901234', 'Ana', 'Martínez', 'ana.martinez@example.com', '3004567890'),
('56789012345', 'Luis', 'Rodríguez', 'luis.rodriguez@example.com', '3005678901'),
('67890123456', 'Gloria', 'González', 'gloria.gonzalez@example.com', '3006789012'),
('78901234567', 'Javier', 'Sánchez', 'javier.sanchez@example.com', '3007890123'),
('89012345678', 'Patricia', 'Romero', 'patricia.romero@example.com', '3008901234'),
('90123456789', 'Felipe', 'Jiménez', 'felipe.jimenez@example.com', '3009012345'),
('01234567890', 'Adriana', 'Mendoza', 'adriana.mendoza@example.com', '3000123456');

-- 2 Asistente.
INSERT INTO Asistente (ID_Asistente_PK, Nombres_Asistente, Apellidos_Asistente, Correo_Asistente, Telefono_Asistente) VALUES
('12345098761', 'Jorge', 'Ramírez', 'jorge.ramirez@example.com', '3006789012'),
('23456109872', 'Marta', 'Hernández', 'marta.hernandez@example.com', '3007890123'),
('34567210983', 'Pedro', 'Gómez', 'pedro.gomez@example.com', '3008901234'),
('45678321094', 'Lucía', 'Torres', 'lucia.torres@example.com', '3009012345'),
('56789432105', 'Andrés', 'Díaz', 'andres.diaz@example.com', '3000123456'),
('67890543216', 'Claudia', 'Castillo', 'claudia.castillo@example.com', '3001234568'),
('78901654327', 'Ricardo', 'Ortiz', 'ricardo.ortiz@example.com', '3002345679'),
('89012765438', 'Paola', 'Silva', 'paola.silva@example.com', '3003456780'),
('90123876549', 'Esteban', 'Moreno', 'esteban.moreno@example.com', '3004567891'),
('01234987650', 'Sandra', 'Ríos', 'sandra.rios@example.com', '3005678902'),
('12346098761', 'Carmen', 'Peña', 'carmen.pena@example.com', '3006789013'),
('23457109872', 'Diego', 'Suárez', 'diego.suarez@example.com', '3007890124'),
('34568210983', 'Laura', 'Fernández', 'laura.fernandez@example.com', '3008901235'),
('45679321094', 'Raúl', 'Castaño', 'raul.castano@example.com', '3009012346'),
('56780432105', 'Beatriz', 'Mejía', 'beatriz.mejia@example.com', '3000123457'),
('67891543216', 'Eduardo', 'Vargas', 'eduardo.vargas@example.com', '3001234569'),
('78902654327', 'Lorena', 'Muñoz', 'lorena.munoz@example.com', '3002345680'),
('89013765438', 'Fernando', 'Rojas', 'fernando.rojas@example.com', '3003456781'),
('90124876549', 'Inés', 'Cabrera', 'ines.cabrera@example.com', '3004567892'),
('01235987650', 'Hugo', 'Pacheco', 'hugo.pacheco@example.com', '3005678903'),
('12347098761', 'Verónica', 'Luna', 'veronica.luna@example.com', '3006789014'),
('23458109872', 'Sergio', 'Reyes', 'sergio.reyes@example.com', '3007890125'),
('34569210983', 'Diana', 'Campos', 'diana.campos@example.com', '3008901236'),
('45680321094', 'Miguel', 'Navarro', 'miguel.navarro@example.com', '3009012347'),
('56791432105', 'Rosa', 'León', 'rosa.leon@example.com', '3000123458'),
('67892543216', 'Manuel', 'Mora', 'manuel.mora@example.com', '3001234570'),
('78903654327', 'Alejandra', 'Guerra', 'alejandra.guerra@example.com', '3002345681'),
('89014765438', 'Alberto', 'Vega', 'alberto.vega@example.com', '3003456782'),
('90125876549', 'Natalia', 'Cruz', 'natalia.cruz@example.com', '3004567893'),
('01236987650', 'Rodrigo', 'Espinosa', 'rodrigo.espinosa@example.com', '3005678904'),
('12348098761', 'Silvia', 'Álvarez', 'silvia.alvarez@example.com', '3006789015'),
('23459109872', 'Joaquín', 'Guerrero', 'joaquin.guerrero@example.com', '3007890126'),
('34560210983', 'Valeria', 'Salazar', 'valeria.salazar@example.com', '3008901237'),
('45671321094', 'Gustavo', 'Bermúdez', 'gustavo.bermudez@example.com', '3009012348'),
('56782432105', 'Elena', 'Cortés', 'elena.cortes@example.com', '3000123459'),
('67893543216', 'Daniel', 'Valencia', 'daniel.valencia@example.com', '3001234571'),
('78904654327', 'Marcos', 'Fuentes', 'marcos.fuentes@example.com', '3002345682'),
('89015765438', 'Isabel', 'Nieto', 'isabel.nieto@example.com', '3003456783'),
('90126876549', 'Armando', 'Lara', 'armando.lara@example.com', '3004567894'),
('01237987650', 'Julia', 'Escobar', 'julia.escobar@example.com', '3005678905'),
('12349098761', 'Federico', 'Bautista', 'federico.bautista@example.com', '3006789016'),
('23460109872', 'Cecilia', 'Montes', 'cecilia.montes@example.com', '3007890127'),
('34571210983', 'Antonio', 'Quintero', 'antonio.quintero@example.com', '3008901238'),
('45682321094', 'Rafael', 'Carrillo', 'rafael.carrillo@example.com', '3009012349'),
('56793432105', 'Gabriela', 'Ortiz', 'gabriela.ortiz@example.com', '3000123460');

-- 3 Grupo.
INSERT INTO Grupo (ID_Lider_FK) VALUES
('12345678901'),
('23456789012');

-- 4 Detalle_Grupo.
INSERT INTO Detalle_Grupo (ID_Grupo_FK, ID_Asistente_FK) VALUES
(1, '12345098761'),
(1, '23456109872'),
(2, '34567210983'),
(2, '45678321094'),
(2, '56789432105');

-- 5 Evento.
INSERT INTO Evento (Nombre_Evento, Fecha_Inicio_Evento, Hora_Fin_Evento, Presupuesto_Evento) VALUES
('Evento Anual', '2024-06-15 09:00:00', '2024-06-15 18:00:00', 50000),
('Conferencia Regional', '2024-07-20 10:00:00', '2024-07-20 17:00:00', 30000);

-- 6 Evento_Grupo.
INSERT INTO Evento_Grupo (ID_Grupo_FK, ID_Evento_FK) VALUES
(1, 1),
(2, 2);

