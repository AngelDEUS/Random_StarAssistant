/*
	* SCRIPT de la database AssitantDB, para el proyecto 'RandomStar Assistant'
*/

CREATE DATABASE AssitantDB;
USE AssitantDB;

CREATE TABLE Lider
(
    ID_Lider_PK VARCHAR(12) NOT NULL,
    Nombres_Lider VARCHAR(35) NOT NULL,
    Apellidos_Lider VARCHAR(35) NOT NULL,
    Correo_Lider VARCHAR(35) NOT NULL,
    Telefono_Lider VARCHAR(13) NOT NULL,    
    PRIMARY KEY (ID_Lider_PK)
);

CREATE TABLE Asistente
(
    ID_Asistente_PK VARCHAR(12) NOT NULL,
    Nombres_Asistente VARCHAR(35) NOT NULL,
    Apellidos_Asistente VARCHAR(35) NOT NULL,
    Correo_Asistente VARCHAR(35) NOT NULL,
    Telefono_Asistente VARCHAR(13) NOT NULL,    
    PRIMARY KEY (ID_Asistente_PK)
);

CREATE TABLE Grupo
(
    ID_Grupo_PK INT AUTO_INCREMENT NOT NULL,
    ID_Lider_FK VARCHAR(12) NOT NULL,    
    PRIMARY KEY (ID_Grupo_PK),
    FOREIGN KEY (ID_Lider_FK) REFERENCES Lider(ID_Lider_PK)
);

CREATE TABLE Detalle_Grupo
(
    ID_Grupo_FK INT NOT NULL,
    ID_Asistente_FK VARCHAR(12) NOT NULL,
    PRIMARY KEY (ID_Grupo_FK, ID_Asistente_FK),
    FOREIGN KEY (ID_Grupo_FK) REFERENCES Grupo(ID_Grupo_PK),
    FOREIGN KEY (ID_Asistente_FK) REFERENCES Asistente(ID_Asistente_PK)
);

CREATE TABLE Evento
(
    ID_Evento_PK INT AUTO_INCREMENT NOT NULL,
    Nombre_Evento VARCHAR(45) NOT NULL,    
    Fecha_Inicio_Evento DATETIME NOT NULL,
    Hora_Fin_Evento DATETIME NOT NULL,
    Presupuesto_Evento DOUBLE (11,2) NOT NULL,
    PRIMARY KEY (ID_Evento_PK)
);

CREATE TABLE Evento_Grupo
(
    ID_Evento_Grupo_PK INT AUTO_INCREMENT NOT NULL,
    ID_Grupo_FK INT NOT NULL,
    ID_Evento_FK INT NOT NULL,
    PRIMARY KEY (ID_Evento_Grupo_PK),
    FOREIGN KEY (ID_Grupo_FK) REFERENCES Grupo(ID_Grupo_PK),
    FOREIGN KEY (ID_Evento_FK) REFERENCES Evento(ID_Evento_PK)
);
