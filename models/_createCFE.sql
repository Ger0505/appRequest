# ---------------------------------------------------------------------- #
# Script generated with: DeZign for Databases v6.2.1                     #
# Target DBMS:           MySQL 5                                         #
# Project file:          CFE.dez                                         #
# Project name:                                                          #
# Author:                                                                #
# Script type:           Database creation script                        #
# Created on:            2020-05-16 15:51                                #
# ---------------------------------------------------------------------- #


# ---------------------------------------------------------------------- #
# Tables                                                                 #
# ---------------------------------------------------------------------- #

# ---------------------------------------------------------------------- #
# Add table "COLABORADOR"                                                #
# ---------------------------------------------------------------------- #

CREATE TABLE `COLABORADOR` (
    `IdColaborador` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(40) NOT NULL,
    `Apellido1` VARCHAR(40) NOT NULL,
    `Apellido2` VARCHAR(40),
    `Usuario` VARCHAR(40) NOT NULL,
    `Password` VARCHAR(40) NOT NULL,
    `IdPuesto` INTEGER NOT NULL,
    `IdDepartamento` INTEGER NOT NULL,
    `Status` INTEGER NOT NULL DEFAULT 1,
    `FechaAlta` DATE NOT NULL DEFAULT NOW(),
    CONSTRAINT `PK_COLABORADOR` PRIMARY KEY (`IdColaborador`)
);

# ---------------------------------------------------------------------- #
# Add table "PUESTO"                                                     #
# ---------------------------------------------------------------------- #

CREATE TABLE `PUESTO` (
    `IdPuesto` INTEGER NOT NULL AUTO_INCREMENT,
    `Descripcion` VARCHAR(40) NOT NULL,
    CONSTRAINT `PK_PUESTO` PRIMARY KEY (`IdPuesto`)
);

# ---------------------------------------------------------------------- #
# Add table "DEPARTAMENTO"                                               #
# ---------------------------------------------------------------------- #

CREATE TABLE `DEPARTAMENTO` (
    `IdDepartamento` INTEGER NOT NULL AUTO_INCREMENT,
    `Descripcion` VARCHAR(60) NOT NULL,
    CONSTRAINT `PK_DEPARTAMENTO` PRIMARY KEY (`IdDepartamento`)
);

# ---------------------------------------------------------------------- #
# Add table "TAREA"                                                      #
# ---------------------------------------------------------------------- #

CREATE TABLE `TAREA` (
    `IdTarea` INTEGER NOT NULL AUTO_INCREMENT,
    `TItulo` VARCHAR(40) NOT NULL,
    `Descripcion` VARCHAR(60),
    `FechaInicio` DATE NOT NULL,
    `FechaFin` DATE NOT NULL,
    `IdResponsable` INTEGER NOT NULL,
    `IdColaborador` INTEGER,
    `IdStatus` INTEGER NOT NULL,
    CONSTRAINT `PK_TAREA` PRIMARY KEY (`IdTarea`)
);

# ---------------------------------------------------------------------- #
# Add table "STATUS"                                                     #
# ---------------------------------------------------------------------- #

CREATE TABLE `STATUS` (
    `IdStatus` INTEGER NOT NULL AUTO_INCREMENT,
    `Descripcion` VARCHAR(40) NOT NULL,
    CONSTRAINT `PK_STATUS` PRIMARY KEY (`IdStatus`)
);

# ---------------------------------------------------------------------- #
# Add table "COMENTARIOS"                                                #
# ---------------------------------------------------------------------- #

CREATE TABLE `COMENTARIOS` (
    `IdComentario` INTEGER NOT NULL AUTO_INCREMENT,
    `Comentario` VARCHAR(100) NOT NULL,
    `Fecha` DATE NOT NULL,
    `IdTarea` INTEGER NOT NULL,
    `IdColaborador` INTEGER NOT NULL,
    CONSTRAINT `PK_COMENTARIOS` PRIMARY KEY (`IdComentario`)
);

# ---------------------------------------------------------------------- #
# Foreign key constraints                                                #
# ---------------------------------------------------------------------- #

ALTER TABLE `COLABORADOR` ADD CONSTRAINT `PUESTO_COLABORADOR` 
    FOREIGN KEY (`IdPuesto`) REFERENCES `PUESTO` (`IdPuesto`);

ALTER TABLE `COLABORADOR` ADD CONSTRAINT `DEPARTAMENTO_COLABORADOR` 
    FOREIGN KEY (`IdDepartamento`) REFERENCES `DEPARTAMENTO` (`IdDepartamento`);

ALTER TABLE `TAREA` ADD CONSTRAINT `COLABORADOR_TAREAResponsable` 
    FOREIGN KEY (`IdResponsable`) REFERENCES `COLABORADOR` (`IdColaborador`);

ALTER TABLE `TAREA` ADD CONSTRAINT `STATUS_TAREA` 
    FOREIGN KEY (`IdStatus`) REFERENCES `STATUS` (`IdStatus`);

ALTER TABLE `TAREA` ADD CONSTRAINT `COLABORADOR_TAREAColaborador` 
    FOREIGN KEY (`IdColaborador`) REFERENCES `COLABORADOR` (`IdColaborador`);

ALTER TABLE `COMENTARIOS` ADD CONSTRAINT `TAREA_COMENTARIOS` 
    FOREIGN KEY (`IdTarea`) REFERENCES `TAREA` (`IdTarea`);

ALTER TABLE `COMENTARIOS` ADD CONSTRAINT `COLABORADOR_COMENTARIOS` 
    FOREIGN KEY (`IdColaborador`) REFERENCES `COLABORADOR` (`IdColaborador`);
