-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-02-2025 a las 14:15:44
-- Versión del servidor: 9.2.0
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `databaseprueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campaigns`
--

CREATE TABLE `campaigns` (
  `id` int UNSIGNED NOT NULL,
  `user_id` int UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `process_date` date DEFAULT NULL,
  `process_hour` time DEFAULT NULL,
  `process_status` int DEFAULT '1',
  `phone_list` text NOT NULL,
  `message_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `campaigns`
--

INSERT INTO `campaigns` (`id`, `user_id`, `name`, `process_date`, `process_hour`, `process_status`, `phone_list`, `message_text`) VALUES
(9, 1, 'Campaña de Marketing Digital', '2025-02-09', '22:47:20', 3, '[\"+51987654321\", \"+51912345678\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(10, 1, 'Campaña de Marketing Digital', '2025-02-09', '22:48:21', 3, '[\"+51987654321\", \"+51912345678\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(11, 1, '+51960612370', '2025-02-10', '19:12:02', 3, '[\"+51960612370\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(12, 1, '+51960612370', '2025-02-10', '19:14:00', 3, '[\"+51960612370\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(13, 1, '+51960612370', '2025-02-10', '19:15:02', 3, '[\"+51960612370\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(14, 1, '+51960612370', '2025-02-10', '19:16:31', 3, '[\"+51960612370\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(15, 1, 'PRUEBA', '2025-02-10', '19:18:28', 3, '[\"+51960613700\",\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(16, 1, 'Camapaña de prueba', '2025-02-10', '20:43:23', 3, '[\"+51960613700\",\"+51960613702\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(17, 1, 'Campaña de prueba', '2025-02-10', '21:27:28', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(18, 1, 'prueba', '2025-02-10', '22:44:42', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(19, 1, 'jioojijojiioij', '2025-02-10', '22:46:12', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(20, 1, '+51960613700', '2025-02-10', '22:49:20', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(21, 1, '+51960613700', '2025-02-10', '22:50:27', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(22, 1, '+51960613700', '2025-02-10', '22:51:40', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(23, 1, '+51960613700', '2025-02-10', '22:54:13', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(24, 1, '+51960613700', '2025-02-10', '22:58:55', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(25, 1, '+51960613700', '2025-02-10', '22:59:59', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(26, 1, '+51960613700', '2025-02-10', '23:08:30', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(27, 1, '+51960613700', '2025-02-10', '23:09:00', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(28, 1, 'CAMPAÑA DE PRUEBA', '2025-02-10', '24:30:04', 3, '[\"+51960613700\",\"+51960613702\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(29, 1, '+51960613700', '2025-02-10', '24:31:02', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(30, 1, '+51960613700', '2025-02-10', '24:35:07', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(31, 1, '+51960613700', '2025-02-10', '24:35:35', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(32, 1, '+51960613700', '2025-02-10', '24:36:30', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(33, 1, '+51960613700', '2025-02-10', '01:17:14', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(34, 1, '+51960613700', '2025-02-10', '01:17:56', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(35, 1, '+51960613700', '2025-02-10', '01:18:34', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(36, 1, '+51960613700', '2025-02-10', '01:22:25', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(37, 1, 'Campaña de prueba, Enero', '2025-02-10', '01:49:06', 3, '[\"+51960613700\",\"+51960613701\",\"+51960613703\"]', '✅ Se muestran el ID, el número de teléfono, el mensaje enviado, la fecha y la hora.\n✅ Mejor estructura y diseño para que sea más legible.\n✅ Usa colores claros para los estados de los mensajes.\n✅ Soporta listas largas sin desbordar el modal.'),
(38, 1, '+51960613700', '2025-02-10', '04:58:23', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),
(39, 1, '+51960613700', '2025-02-10', '05:10:37', 3, '[\"+51960613700\"]', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`id`, `name`, `status`) VALUES
(1, 'Jhosep Mio', 1),
(2, 'Jhosep Mio', 1),
(3, 'Jhosep Mio', 1),
(4, 'Jhosep Mio', 1),
(5, 'owen', 1),
(6, 'owen malqui', 1),
(7, 'qwerasd', 1),
(8, 'qwerasd2', 1),
(9, 'qwerasd3', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20250207184558_create_customers_table.js', 1, '2025-02-09 03:05:54'),
(2, '20250207184600_create_users_table.js', 1, '2025-02-09 03:05:54'),
(3, '20250207184601_create_campaigns_table.js', 1, '2025-02-09 03:05:54'),
(4, '20250207184602_create_messages_table.js', 1, '2025-02-09 03:05:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int UNSIGNED NOT NULL,
  `is_locked` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `messages`
--

CREATE TABLE `messages` (
  `id` int UNSIGNED NOT NULL,
  `campaign_id` int UNSIGNED DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `shipping_status` int DEFAULT '1',
  `process_date` date DEFAULT NULL,
  `process_hour` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `messages`
--

INSERT INTO `messages` (`id`, `campaign_id`, `phone`, `text`, `shipping_status`, `process_date`, `process_hour`) VALUES
(1, 9, '+51987654321', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-09', '22:47:20'),
(2, 9, '+51912345678', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-09', '22:47:20'),
(3, 10, '+51987654321', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-09', '22:48:21'),
(4, 10, '+51912345678', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-09', '22:48:21'),
(5, 11, '+51960612370', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '19:12:02'),
(6, 12, '+51960612370', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '19:14:00'),
(7, 13, '+51960612370', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '19:15:02'),
(8, 14, '+51960612370', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '19:16:31'),
(9, 15, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '19:18:28'),
(10, 15, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '19:18:28'),
(11, 17, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '22:29:34'),
(12, 16, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '22:33:43'),
(13, 16, '+51960613702', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '22:33:44'),
(14, 18, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '22:44:46'),
(15, 19, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '22:46:14'),
(16, 20, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '22:49:24'),
(17, 21, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '22:50:29'),
(18, 22, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '22:51:42'),
(19, 22, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '22:51:55'),
(20, 23, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '22:55:15'),
(21, 24, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '22:59:00'),
(22, 25, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '23:00:01'),
(23, 25, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '23:00:27'),
(24, 25, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '23:00:59'),
(25, 26, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '23:08:31'),
(26, 27, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '23:09:02'),
(27, 27, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '23:09:28'),
(28, 28, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '24:30:22'),
(29, 28, '+51960613702', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '24:30:23'),
(30, 29, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '24:31:04'),
(31, 30, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '24:35:09'),
(32, 31, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '24:35:37'),
(33, 32, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '24:36:31'),
(34, 33, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '01:17:17'),
(35, 33, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '01:17:20'),
(36, 34, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '01:17:58'),
(37, 34, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 3, '2025-02-10', '01:18:00'),
(38, 35, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '01:18:36'),
(39, 36, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '01:22:27'),
(40, 37, '+51960613700', '✅ Se muestran el ID, el número de teléfono, el mensaje enviado, la fecha y la hora.\n✅ Mejor estructura y diseño para que sea más legible.\n✅ Usa colores claros para los estados de los mensajes.\n✅ Soporta listas largas sin desbordar el modal.', 2, '2025-02-10', '01:50:19'),
(41, 37, '+51960613701', '✅ Se muestran el ID, el número de teléfono, el mensaje enviado, la fecha y la hora.\n✅ Mejor estructura y diseño para que sea más legible.\n✅ Usa colores claros para los estados de los mensajes.\n✅ Soporta listas largas sin desbordar el modal.', 3, '2025-02-10', '01:50:20'),
(42, 37, '+51960613703', '✅ Se muestran el ID, el número de teléfono, el mensaje enviado, la fecha y la hora.\n✅ Mejor estructura y diseño para que sea más legible.\n✅ Usa colores claros para los estados de los mensajes.\n✅ Soporta listas largas sin desbordar el modal.', 3, '2025-02-10', '01:50:21'),
(43, 38, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '05:07:54'),
(44, 39, '+51960613700', '¡Hola! Este es un mensaje de prueba para la campaña de marketing.', 2, '2025-02-10', '05:10:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int UNSIGNED NOT NULL,
  `customer_id` int UNSIGNED DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `customer_id`, `username`, `status`) VALUES
(1, 1, 'jhmio', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `campaigns_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Indices de la tabla `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messages_campaign_id_foreign` (`campaign_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_customer_id_foreign` (`customer_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `campaigns`
--
ALTER TABLE `campaigns`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `campaigns`
--
ALTER TABLE `campaigns`
  ADD CONSTRAINT `campaigns_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_campaign_id_foreign` FOREIGN KEY (`campaign_id`) REFERENCES `campaigns` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
