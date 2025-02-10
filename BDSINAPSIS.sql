-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: sinapsis
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `campaigns`
--

DROP TABLE IF EXISTS `campaigns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campaigns` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `process_date` date DEFAULT NULL,
  `process_hour` time DEFAULT NULL,
  `process_status` int DEFAULT '1',
  `phone_list` text NOT NULL,
  `message_text` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `campaigns_user_id_foreign` (`user_id`),
  CONSTRAINT `campaigns_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaigns`
--

LOCK TABLES `campaigns` WRITE;
/*!40000 ALTER TABLE `campaigns` DISABLE KEYS */;
INSERT INTO `campaigns` VALUES (1,1,'Campaña de Marketing Digital','2025-02-09','03:28:26',1,'[\"+51987654321\", \"+51912345678\"]','¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),(2,1,'Campaña de Marketing Digital','2025-02-09','22:29:55',1,'[\"+51987654321\", \"+51912345678\"]','¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),(3,1,'Campaña de Marketing Digital','2025-02-09','22:30:52',1,'[\"+51987654321\", \"+51912345678\"]','¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),(4,1,'Campaña de Marketing Digital','2025-02-09','03:32:29',1,'[\"+51987654321\", \"+51912345678\"]','¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),(5,1,'Campaña de Marketing Digital','2025-02-09','03:38:26',1,'[\"+51987654321\", \"+51912345678\"]','¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),(6,1,'Campaña de Marketing Digital','2025-02-09','03:41:04',1,'[\"+51987654321\", \"+51912345678\"]','¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),(7,1,'Campaña de Marketing Digital','2025-02-09','22:42:33',1,'[\"+51987654321\", \"+51912345678\"]','¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),(8,1,'Campaña de Marketing Digital','2025-02-09','22:44:59',1,'[\"+51987654321\", \"+51912345678\"]','¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),(9,1,'Campaña de Marketing Digital','2025-02-09','22:47:20',3,'[\"+51987654321\", \"+51912345678\"]','¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),(10,1,'Campaña de Marketing Digital','2025-02-09','22:48:21',2,'[\"+51987654321\", \"+51912345678\"]','¡Hola! Este es un mensaje de prueba para la campaña de marketing.'),(11,1,'+51960612370','2025-02-10','19:12:02',3,'[\"+51960612370\"]','+51960612370'),(12,1,'+51960612370','2025-02-10','19:14:00',3,'[\"+51960612370\"]','+51960612370'),(13,1,'+51960612370','2025-02-10','19:15:02',3,'[\"+51960612370\"]','+51960612370'),(14,1,'+51960612370','2025-02-10','19:16:31',3,'[\"+51960612370\"]','+51960612370'),(15,1,'PRUEBA','2025-02-10','19:18:28',2,'[\"+51960613700\",\"+51960613700\"]','¡MENSAJE DE PRUEBA!'),(16,1,'Camapaña de prueba','2025-02-10','20:43:23',2,'[\"+51960613700\",\"+51960613702\"]','¡Mensaje de prueba!'),(17,1,'Campaña de prueba','2025-02-10','21:27:28',2,'[\"+51960613700\"]','¡Mensaje!'),(18,1,'prueba','2025-02-10','22:44:42',2,'[\"+51960613700\"]','mensaje de prueba'),(19,1,'jioojijojiioij','2025-02-10','22:46:12',2,'[\"+51960613700\"]','+51960613700'),(20,1,'+51960613700','2025-02-10','22:49:20',2,'[\"+51960613700\"]','+51960613700'),(21,1,'+51960613700','2025-02-10','22:50:27',2,'[\"+51960613700\"]','+51960613700'),(22,1,'+51960613700','2025-02-10','22:51:40',3,'[\"+51960613700\"]','+51960613700'),(23,1,'+51960613700','2025-02-10','22:54:13',3,'[\"+51960613700\"]','+51960613700'),(24,1,'+51960613700','2025-02-10','22:58:55',3,'[\"+51960613700\"]','+51960613700'),(25,1,'+51960613700','2025-02-10','22:59:59',3,'[\"+51960613700\"]','+51960613700'),(26,1,'+51960613700','2025-02-10','23:08:30',3,'[\"+51960613700\"]','+51960613700'),(27,1,'+51960613700','2025-02-10','23:09:00',3,'[\"+51960613700\"]','+51960613700'),(28,1,'CAMPAÑA DE PRUEBA','2025-02-10','24:30:04',3,'[\"+51960613700\",\"+51960613702\"]','MENSAJE DE PRUEBA'),(29,1,'+51960613700','2025-02-10','24:31:02',3,'[\"+51960613700\"]','+51960613700'),(30,1,'+51960613700','2025-02-10','24:35:07',3,'[\"+51960613700\"]','+51960613700'),(31,1,'+51960613700','2025-02-10','24:35:35',3,'[\"+51960613700\"]','+51960613700'),(32,1,'+51960613700','2025-02-10','24:36:30',3,'[\"+51960613700\"]','+51960613700'),(33,1,'+51960613700','2025-02-10','01:17:14',3,'[\"+51960613700\"]','+51960613700'),(34,1,'+51960613700','2025-02-10','01:17:56',3,'[\"+51960613700\"]','+51960613700'),(35,1,'+51960613700','2025-02-10','01:18:34',3,'[\"+51960613700\"]','+51960613700'),(36,1,'+51960613700','2025-02-10','01:22:25',3,'[\"+51960613700\"]','+51960613700'),(37,1,'Campaña de prueba, Enero','2025-02-10','01:49:06',3,'[\"+51960613700\",\"+51960613701\",\"+51960613703\"]','✅ Se muestran el ID, el número de teléfono, el mensaje enviado, la fecha y la hora.\n✅ Mejor estructura y diseño para que sea más legible.\n✅ Usa colores claros para los estados de los mensajes.\n✅ Soporta listas largas sin desbordar el modal.'),(38,1,'+51960613700','2025-02-10','04:58:23',3,'[\"+51960613700\"]','+51960613700'),(39,1,'+51960613700','2025-02-10','05:10:37',3,'[\"+51960613700\"]','+51960613700'),(40,5,'Camapaña de prueba','2025-02-10','06:24:45',3,'[\"+51960613800\",\"+51960613700\"]','¡Mensaje de prueba!');
/*!40000 ALTER TABLE `campaigns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Jhosep Mio',1),(2,'Jhosep Mio',1),(3,'Jhosep Mio',1),(4,'Jhosep Mio',1),(5,'owen',1),(6,'owen malqui',1),(7,'qwerasd',1),(8,'qwerasd2',1),(9,'qwerasd3',1);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
INSERT INTO `knex_migrations` VALUES (1,'20250207184558_create_customers_table.js',1,'2025-02-09 03:05:54'),(2,'20250207184600_create_users_table.js',1,'2025-02-09 03:05:54'),(3,'20250207184601_create_campaigns_table.js',1,'2025-02-09 03:05:54'),(4,'20250207184602_create_messages_table.js',1,'2025-02-09 03:05:54');
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `campaign_id` int unsigned DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `shipping_status` int DEFAULT '1',
  `process_date` date DEFAULT NULL,
  `process_hour` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `messages_campaign_id_foreign` (`campaign_id`),
  CONSTRAINT `messages_campaign_id_foreign` FOREIGN KEY (`campaign_id`) REFERENCES `campaigns` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,9,'+51987654321','¡Hola! Este es un mensaje de prueba para la campaña de marketing.',2,'2025-02-09','22:47:20'),(2,9,'+51912345678','¡Hola! Este es un mensaje de prueba para la campaña de marketing.',2,'2025-02-09','22:47:20'),(3,10,'+51987654321','¡Hola! Este es un mensaje de prueba para la campaña de marketing.',3,'2025-02-09','22:48:21'),(4,10,'+51912345678','¡Hola! Este es un mensaje de prueba para la campaña de marketing.',3,'2025-02-09','22:48:21'),(5,11,'+51960612370','+51960612370',2,'2025-02-10','19:12:02'),(6,12,'+51960612370','+51960612370',2,'2025-02-10','19:14:00'),(7,13,'+51960612370','+51960612370',2,'2025-02-10','19:15:02'),(8,14,'+51960612370','+51960612370',2,'2025-02-10','19:16:31'),(9,15,'+51960613700','¡MENSAJE DE PRUEBA!',2,'2025-02-10','19:18:28'),(10,15,'+51960613700','¡MENSAJE DE PRUEBA!',3,'2025-02-10','19:18:28'),(11,17,'+51960613700','¡Mensaje!',1,'2025-02-10','22:29:34'),(12,16,'+51960613700','¡Mensaje de prueba!',1,'2025-02-10','22:33:43'),(13,16,'+51960613702','¡Mensaje de prueba!',1,'2025-02-10','22:33:44'),(14,18,'+51960613700','mensaje de prueba',1,'2025-02-10','22:44:46'),(15,19,'+51960613700','+51960613700',1,'2025-02-10','22:46:14'),(16,20,'+51960613700','+51960613700',1,'2025-02-10','22:49:24'),(17,21,'+51960613700','+51960613700',1,'2025-02-10','22:50:29'),(18,22,'+51960613700','+51960613700',2,'2025-02-10','22:51:42'),(19,22,'+51960613700','+51960613700',3,'2025-02-10','22:51:55'),(20,23,'+51960613700','+51960613700',3,'2025-02-10','22:55:15'),(21,24,'+51960613700','+51960613700',3,'2025-02-10','22:59:00'),(22,25,'+51960613700','+51960613700',3,'2025-02-10','23:00:01'),(23,25,'+51960613700','+51960613700',3,'2025-02-10','23:00:27'),(24,25,'+51960613700','+51960613700',3,'2025-02-10','23:00:59'),(25,26,'+51960613700','+51960613700',3,'2025-02-10','23:08:31'),(26,27,'+51960613700','+51960613700',2,'2025-02-10','23:09:02'),(27,27,'+51960613700','+51960613700',2,'2025-02-10','23:09:28'),(28,28,'+51960613700','MENSAJE DE PRUEBA',2,'2025-02-10','24:30:22'),(29,28,'+51960613702','MENSAJE DE PRUEBA',2,'2025-02-10','24:30:23'),(30,29,'+51960613700','+51960613700',3,'2025-02-10','24:31:04'),(31,30,'+51960613700','+51960613700',2,'2025-02-10','24:35:09'),(32,31,'+51960613700','+51960613700',2,'2025-02-10','24:35:37'),(33,32,'+51960613700','+51960613700',2,'2025-02-10','24:36:31'),(34,33,'+51960613700','+51960613700',3,'2025-02-10','01:17:17'),(35,33,'+51960613700','+51960613700',2,'2025-02-10','01:17:20'),(36,34,'+51960613700','+51960613700',2,'2025-02-10','01:17:58'),(37,34,'+51960613700','+51960613700',3,'2025-02-10','01:18:00'),(38,35,'+51960613700','+51960613700',2,'2025-02-10','01:18:36'),(39,36,'+51960613700','+51960613700',2,'2025-02-10','01:22:27'),(40,37,'+51960613700','✅ Se muestran el ID, el número de teléfono, el mensaje enviado, la fecha y la hora.\n✅ Mejor estructura y diseño para que sea más legible.\n✅ Usa colores claros para los estados de los mensajes.\n✅ Soporta listas largas sin desbordar el modal.',2,'2025-02-10','01:50:19'),(41,37,'+51960613701','✅ Se muestran el ID, el número de teléfono, el mensaje enviado, la fecha y la hora.\n✅ Mejor estructura y diseño para que sea más legible.\n✅ Usa colores claros para los estados de los mensajes.\n✅ Soporta listas largas sin desbordar el modal.',3,'2025-02-10','01:50:20'),(42,37,'+51960613703','✅ Se muestran el ID, el número de teléfono, el mensaje enviado, la fecha y la hora.\n✅ Mejor estructura y diseño para que sea más legible.\n✅ Usa colores claros para los estados de los mensajes.\n✅ Soporta listas largas sin desbordar el modal.',3,'2025-02-10','01:50:21'),(43,38,'+51960613700','+51960613700',2,'2025-02-10','05:07:54'),(44,39,'+51960613700','+51960613700',2,'2025-02-10','05:10:39'),(45,40,'+51960613800','¡Mensaje de prueba!',2,'2025-02-10','06:26:17'),(46,40,'+51960613700','¡Mensaje de prueba!',2,'2025-02-10','06:26:18');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int unsigned DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `users_customer_id_foreign` (`customer_id`),
  CONSTRAINT `users_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'jhmio',1),(2,NULL,'jhosepmio',1),(3,NULL,'owen',1),(4,NULL,'owen malqui',1),(5,NULL,'qwerasd',1),(6,NULL,'qwerasd2',1),(7,NULL,'qwerasd3',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-10  6:43:13
