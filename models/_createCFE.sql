-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-06-2020 a las 07:23:49
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cfe`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivo`
--

CREATE TABLE `archivo` (
  `IdArchivo` int(11) NOT NULL,
  `Ruta` text NOT NULL,
  `IdTarea` int(11) NOT NULL,
  `Status` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `archivo`
--

INSERT INTO `archivo` (`IdArchivo`, `Ruta`, `IdTarea`, `Status`) VALUES
(1, '314902.jpg', 1, 1),
(2, 'ATCCR0A.png', 1, 1),
(3, 'ACEVEDO_ARZOLA_LISHU6_ACTIVIDAD3.pdf', 17, 1),
(4, 'certificado_coursera_GerardoAcevedo.pdf', 20, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colaborador`
--

CREATE TABLE `colaborador` (
  `IdColaborador` int(11) NOT NULL,
  `Nombre` varchar(40) NOT NULL,
  `Apellido1` varchar(40) NOT NULL,
  `Apellido2` varchar(40) DEFAULT NULL,
  `Usuario` varchar(40) NOT NULL,
  `Password` varchar(40) NOT NULL,
  `IdPuesto` int(11) NOT NULL,
  `IdDepartamento` int(11) NOT NULL,
  `Status` int(11) NOT NULL DEFAULT 1,
  `FechaAlta` date NOT NULL DEFAULT NOW()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `colaborador`
--

INSERT INTO `colaborador` (`IdColaborador`, `Nombre`, `Apellido1`, `Apellido2`, `Usuario`, `Password`, `IdPuesto`, `IdDepartamento`, `Status`, `FechaAlta`) VALUES
(1, 'Gerardo', 'Acevedo', 'Arzola', 'ger0505', 'bjjn.zpluij78', 1, 1, 1, '2020-05-29'),
(2, 'Luis Gerardo', 'González', 'González', 'luisgera', 'elanis', 1, 2, 1, '2020-05-29'),
(3, 'Viktor', 'González', 'Altamirano', 'viktoe', 'viktor', 4, 2, 1, '2020-06-02'),
(4, 'Darwin', 'Wouitila', 'Peréz', 'darwinw', 'darwin', 2, 2, 1, '2020-06-03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `IdComentario` int(11) NOT NULL,
  `Comentario` varchar(100) NOT NULL,
  `Fecha` date NOT NULL,
  `IdTarea` int(11) NOT NULL,
  `IdColaborador` int(11) NOT NULL,
  `Status` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`IdComentario`, `Comentario`, `Fecha`, `IdTarea`, `IdColaborador`, `Status`) VALUES
(1, '\\n                Y Adios\\n            ', '0000-00-00', 14, 1, 1),
(2, '\n                sadfasdfdff,.,.,,.\n            ', '0000-00-00', 15, 1, 1),
(3, '                yyyyyyyyyyyyy!!!!!!!!!\r\n            ', '2020-06-03', 15, 1, 1),
(4, 'Nuevo Sistema de Comentarios', '2020-05-02', 15, 1, 1),
(5, 'Que tengan un buen día:)', '2020-05-02', 1, 1, 1),
(6, 'Intentaré no llorar', '2020-05-02', 16, 3, 1),
(7, '\n                Revisión anual en 1 mes.\n            ', '2020-05-03', 18, 1, 1),
(8, 'Revisa el Lunes', '2020-05-03', 2, 1, 1),
(9, '\n                Comentario de inicio\n            ', '2020-05-03', 19, 1, 1),
(10, 'Tener un día bueno', '2020-05-03', 20, 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `IdDepartamento` int(11) NOT NULL,
  `Descripcion` varchar(60) NOT NULL,
  `Status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`IdDepartamento`, `Descripcion`, `Status`) VALUES
(1, 'Gerencia General', 1),
(2, 'Gerencia de Operaciones', 1),
(3, 'Control de Electricidades', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puesto`
--

CREATE TABLE `puesto` (
  `IdPuesto` int(11) NOT NULL,
  `Descripcion` varchar(40) NOT NULL,
  `Status` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `puesto`
--

INSERT INTO `puesto` (`IdPuesto`, `Descripcion`, `Status`) VALUES
(1, 'Jefe de Oficina', 1),
(2, 'Jefe de Departamento', 1),
(3, 'Gerente de Distribución', 1),
(4, 'Trabajador', 1),
(5, 'Empleados', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `IdStatus` int(11) NOT NULL,
  `Descripcion` text NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Status` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`IdStatus`, `Descripcion`, `Nombre`, `Status`) VALUES
(1, 'Nueva Actividad', 'Nuevo', 1),
(2, 'La tarea está en realización', 'Activo', 1),
(3, 'Espera en la etapa de prueba', 'Resuelto', 1),
(4, 'Tarea Completada', 'Cerrado', 1),
(5, 'La tarea fue suspendida temporalmente', 'Cancelado', 0),
(6, 'Tarea Eliminada', 'Borrado', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarea`
--

CREATE TABLE `tarea` (
  `IdTarea` int(11) NOT NULL,
  `TItulo` varchar(40) NOT NULL,
  `Descripcion` varchar(60) DEFAULT NULL,
  `FechaInicio` date NOT NULL DEFAULT NOW(),
  `FechaFin` date NOT NULL,
  `IdResponsable` int(11) NOT NULL,
  `IdColaborador` int(11) DEFAULT NULL,
  `IdStatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tarea`
--

INSERT INTO `tarea` (`IdTarea`, `TItulo`, `Descripcion`, `FechaInicio`, `FechaFin`, `IdResponsable`, `IdColaborador`, `IdStatus`) VALUES
(1, 'Tener un buen día', 'Después de muchas tareas, el trabajo de hoy es divertirse!', '2020-05-29', '2020-06-05', 1, 2, 6),
(2, 'Importar CVS', 'Hacer un CVS en Excel para el análisis de la empres a CFE.', '0000-00-00', '2020-06-01', 1, 2, 1),
(3, 'Ver Doctor Who', 'Desde el programa de televisión Doctor Who desde la temporad', '2020-05-30', '2020-06-06', 1, 2, 1),
(4, 'Formato JSON', 'Convertir a formato JSON', '2020-05-30', '2020-07-08', 1, 2, 1),
(5, 'Jugar Fornite', 'Jugar intensamente Fornite....', '2020-05-31', '2020-06-10', 1, 2, 1),
(6, 'Crea PDF', 'Let\'s go!', '2020-05-31', '2020-07-08', 1, 2, 1),
(7, 'dgdfgsdggdfsgf', 'fdggsfgdsgf', '2020-05-31', '2020-07-01', 1, 2, 1),
(8, 'sfdasfafsd', 'safdfsafsdfsaf', '2020-05-31', '2020-06-24', 1, 2, 1),
(9, 'dfsaafsddf', 'sfaddfsfd', '2020-05-31', '2020-06-18', 1, 2, 1),
(10, 'fsdfsdffdsa', 'sfdfdfdsadfsaf', '2020-05-31', '2020-06-25', 1, 2, 1),
(11, 'dsfdfasfdasffd', 'fdsfsdfsdafsd', '2020-05-31', '2020-06-25', 1, 2, 1),
(12, 'sfdafdsffds', 'sdfssfadfds', '2020-05-31', '2020-06-19', 1, 2, 1),
(13, 'Final de Finales', 'Este el ultimo, por favor', '2020-05-31', '2020-06-24', 1, 2, 1),
(14, 'FIN', 'Hola Mundo', '2020-05-31', '2020-07-02', 1, 2, 1),
(15, 'dfsafdadsf!!!!!!!!!!!!!!', 'fdsfdsj!!!!!!!!!!!', '2020-05-31', '2020-07-03', 1, 2, 6),
(16, 'Valer con Luis hoy', 'Vas a valer con Luis, pero intenta no valer', '2020-06-02', '2020-07-15', 1, 3, 6),
(17, 'Verificación de voltaje', 'Verificar que todas las resistencias tengan 5V', '2020-06-03', '2020-07-23', 1, 3, 1),
(18, 'Verificación de Voltaje II', 'Verificar que los transistores tengan 5V', '2020-06-03', '2020-08-11', 1, 3, 1),
(19, 'Tarea de Prueba', 'Esta es una tarea de prueba...', '2020-06-03', '2020-11-26', 1, 4, 2),
(20, 'Este es una tarea de prueba pero 2', 'Este es una prueba 2', '2020-06-03', '2020-08-13', 4, 3, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivo`
--
ALTER TABLE `archivo`
  ADD PRIMARY KEY (`IdArchivo`),
  ADD KEY `IdTarea` (`IdTarea`);

--
-- Indices de la tabla `colaborador`
--
ALTER TABLE `colaborador`
  ADD PRIMARY KEY (`IdColaborador`),
  ADD KEY `PUESTO_COLABORADOR` (`IdPuesto`),
  ADD KEY `DEPARTAMENTO_COLABORADOR` (`IdDepartamento`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`IdComentario`),
  ADD KEY `TAREA_COMENTARIOS` (`IdTarea`),
  ADD KEY `COLABORADOR_COMENTARIOS` (`IdColaborador`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`IdDepartamento`);

--
-- Indices de la tabla `puesto`
--
ALTER TABLE `puesto`
  ADD PRIMARY KEY (`IdPuesto`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`IdStatus`);

--
-- Indices de la tabla `tarea`
--
ALTER TABLE `tarea`
  ADD PRIMARY KEY (`IdTarea`),
  ADD KEY `COLABORADOR_TAREAResponsable` (`IdResponsable`),
  ADD KEY `STATUS_TAREA` (`IdStatus`),
  ADD KEY `COLABORADOR_TAREAColaborador` (`IdColaborador`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archivo`
--
ALTER TABLE `archivo`
  MODIFY `IdArchivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `colaborador`
--
ALTER TABLE `colaborador`
  MODIFY `IdColaborador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `IdComentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `IdDepartamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `puesto`
--
ALTER TABLE `puesto`
  MODIFY `IdPuesto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `status`
--
ALTER TABLE `status`
  MODIFY `IdStatus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tarea`
--
ALTER TABLE `tarea`
  MODIFY `IdTarea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `archivo`
--
ALTER TABLE `archivo`
  ADD CONSTRAINT `archivo_ibfk_1` FOREIGN KEY (`IdTarea`) REFERENCES `tarea` (`IdTarea`);

--
-- Filtros para la tabla `colaborador`
--
ALTER TABLE `colaborador`
  ADD CONSTRAINT `DEPARTAMENTO_COLABORADOR` FOREIGN KEY (`IdDepartamento`) REFERENCES `departamento` (`IdDepartamento`),
  ADD CONSTRAINT `PUESTO_COLABORADOR` FOREIGN KEY (`IdPuesto`) REFERENCES `puesto` (`IdPuesto`);

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `COLABORADOR_COMENTARIOS` FOREIGN KEY (`IdColaborador`) REFERENCES `colaborador` (`IdColaborador`),
  ADD CONSTRAINT `TAREA_COMENTARIOS` FOREIGN KEY (`IdTarea`) REFERENCES `tarea` (`IdTarea`);

--
-- Filtros para la tabla `tarea`
--
ALTER TABLE `tarea`
  ADD CONSTRAINT `COLABORADOR_TAREAColaborador` FOREIGN KEY (`IdColaborador`) REFERENCES `colaborador` (`IdColaborador`),
  ADD CONSTRAINT `COLABORADOR_TAREAResponsable` FOREIGN KEY (`IdResponsable`) REFERENCES `colaborador` (`IdColaborador`),
  ADD CONSTRAINT `STATUS_TAREA` FOREIGN KEY (`IdStatus`) REFERENCES `status` (`IdStatus`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
