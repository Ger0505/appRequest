# ---------------------------------------------------------------------- #
# Script generated with: DeZign for Databases v6.2.1                     #
# Target DBMS:           MySQL 5                                         #
# Project file:          CFE.dez                                         #
# Project name:                                                          #
# Author:                                                                #
# Script type:           Database drop script                            #
# Created on:            2020-05-19 23:16                                #
# ---------------------------------------------------------------------- #


# ---------------------------------------------------------------------- #
# Drop foreign key constraints                                           #
# ---------------------------------------------------------------------- #

ALTER TABLE `COLABORADOR` DROP FOREIGN KEY `PUESTO_COLABORADOR`;

ALTER TABLE `COLABORADOR` DROP FOREIGN KEY `DEPARTAMENTO_COLABORADOR`;

ALTER TABLE `TAREA` DROP FOREIGN KEY `COLABORADOR_TAREAResponsable`;

ALTER TABLE `TAREA` DROP FOREIGN KEY `STATUS_TAREA`;

ALTER TABLE `TAREA` DROP FOREIGN KEY `COLABORADOR_TAREAColaborador`;

ALTER TABLE `COMENTARIOS` DROP FOREIGN KEY `TAREA_COMENTARIOS`;

ALTER TABLE `COMENTARIOS` DROP FOREIGN KEY `COLABORADOR_COMENTARIOS`;

# ---------------------------------------------------------------------- #
# Drop table "COMENTARIOS"                                               #
# ---------------------------------------------------------------------- #

# Remove autoinc for PK drop #

ALTER TABLE `COMENTARIOS` MODIFY `IdComentario` INTEGER NOT NULL;

# Drop constraints #

ALTER TABLE `COMENTARIOS` ALTER COLUMN `Fecha` DROP DEFAULT;

ALTER TABLE `COMENTARIOS` ALTER COLUMN `Status` DROP DEFAULT;

ALTER TABLE `COMENTARIOS` DROP PRIMARY KEY;

# Drop table #

DROP TABLE `COMENTARIOS`;

# ---------------------------------------------------------------------- #
# Drop table "TAREA"                                                     #
# ---------------------------------------------------------------------- #

# Remove autoinc for PK drop #

ALTER TABLE `TAREA` MODIFY `IdTarea` INTEGER NOT NULL;

# Drop constraints #

ALTER TABLE `TAREA` ALTER COLUMN `FechaInicio` DROP DEFAULT;

ALTER TABLE `TAREA` DROP PRIMARY KEY;

# Drop table #

DROP TABLE `TAREA`;

# ---------------------------------------------------------------------- #
# Drop table "COLABORADOR"                                               #
# ---------------------------------------------------------------------- #

# Remove autoinc for PK drop #

ALTER TABLE `COLABORADOR` MODIFY `IdColaborador` INTEGER NOT NULL;

# Drop constraints #

ALTER TABLE `COLABORADOR` ALTER COLUMN `FechaAlta` DROP DEFAULT;

ALTER TABLE `COLABORADOR` ALTER COLUMN `Status` DROP DEFAULT;

ALTER TABLE `COLABORADOR` DROP PRIMARY KEY;

# Drop table #

DROP TABLE `COLABORADOR`;

# ---------------------------------------------------------------------- #
# Drop table "STATUS"                                                    #
# ---------------------------------------------------------------------- #

# Remove autoinc for PK drop #

ALTER TABLE `STATUS` MODIFY `IdStatus` INTEGER NOT NULL;

# Drop constraints #

ALTER TABLE `STATUS` ALTER COLUMN `Status` DROP DEFAULT;

ALTER TABLE `STATUS` DROP PRIMARY KEY;

# Drop table #

DROP TABLE `STATUS`;

# ---------------------------------------------------------------------- #
# Drop table "DEPARTAMENTO"                                              #
# ---------------------------------------------------------------------- #

# Remove autoinc for PK drop #

ALTER TABLE `DEPARTAMENTO` MODIFY `IdDepartamento` INTEGER NOT NULL;

# Drop constraints #

ALTER TABLE `DEPARTAMENTO` ALTER COLUMN `Status` DROP DEFAULT;

ALTER TABLE `DEPARTAMENTO` DROP PRIMARY KEY;

# Drop table #

DROP TABLE `DEPARTAMENTO`;

# ---------------------------------------------------------------------- #
# Drop table "PUESTO"                                                    #
# ---------------------------------------------------------------------- #

# Remove autoinc for PK drop #

ALTER TABLE `PUESTO` MODIFY `IdPuesto` INTEGER NOT NULL;

# Drop constraints #

ALTER TABLE `PUESTO` ALTER COLUMN `Status` DROP DEFAULT;

ALTER TABLE `PUESTO` DROP PRIMARY KEY;

# Drop table #

DROP TABLE `PUESTO`;
