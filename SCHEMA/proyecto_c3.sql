/*
 Navicat Premium Data Transfer

 Source Server         : misiontic
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : localhost:3306
 Source Schema         : proyecto_c3

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 06/10/2022 02:08:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for antecedentes_no_patologicos
-- ----------------------------
DROP TABLE IF EXISTS `antecedentes_no_patologicos`;
CREATE TABLE `antecedentes_no_patologicos`  (
  `id_antecedentesnopatologicos` int NOT NULL AUTO_INCREMENT,
  `alcoholismo` bit(1) NOT NULL,
  `tabaquismo` bit(1) NOT NULL,
  `drogadiccion` bit(1) NOT NULL,
  `alergias` bit(1) NOT NULL,
  `cirugias` bit(1) NOT NULL,
  `id_paciente` int NULL DEFAULT NULL,
  `paciente_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_antecedentesnopatologicos`) USING BTREE,
  INDEX `id_paciente`(`id_paciente` ASC) USING BTREE,
  INDEX `FKsefbwnx2yhwy77dhi737xds8o`(`paciente_id` ASC) USING BTREE,
  CONSTRAINT `antecedentes_no_patologicos_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `paciente` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKsefbwnx2yhwy77dhi737xds8o` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for antecedentes_patologicos
-- ----------------------------
DROP TABLE IF EXISTS `antecedentes_patologicos`;
CREATE TABLE `antecedentes_patologicos`  (
  `id_antecedentespatologicos` int NOT NULL AUTO_INCREMENT,
  `pulmonares` bit(1) NOT NULL,
  `cardiacos` bit(1) NOT NULL,
  `digestivos` bit(1) NOT NULL,
  `endocrinos` bit(1) NOT NULL,
  `genitourinarios` bit(1) NOT NULL,
  `hematologicos` bit(1) NOT NULL,
  `neurologicos` bit(1) NOT NULL,
  `psiquiatricos` bit(1) NOT NULL,
  `traumatologicos` bit(1) NOT NULL,
  `id_paciente` int NULL DEFAULT NULL,
  `paciente_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_antecedentespatologicos`) USING BTREE,
  INDEX `id_paciente`(`id_paciente` ASC) USING BTREE,
  INDEX `FKkpt96tgnjcm9xkia3akvdh99l`(`paciente_id` ASC) USING BTREE,
  CONSTRAINT `antecedentes_patologicos_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `paciente` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKkpt96tgnjcm9xkia3akvdh99l` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for diagnostico_presuntivo
-- ----------------------------
DROP TABLE IF EXISTS `diagnostico_presuntivo`;
CREATE TABLE `diagnostico_presuntivo`  (
  `id_diagnostico` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `id_paciente` int NULL DEFAULT NULL,
  `paciente_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_diagnostico`) USING BTREE,
  INDEX `id_paciente`(`id_paciente` ASC) USING BTREE,
  INDEX `FKoax36m1wmljwcpp2a9422hlpn`(`paciente_id` ASC) USING BTREE,
  CONSTRAINT `diagnostico_presuntivo_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `paciente` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKoax36m1wmljwcpp2a9422hlpn` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for exploracion_fisica
-- ----------------------------
DROP TABLE IF EXISTS `exploracion_fisica`;
CREATE TABLE `exploracion_fisica`  (
  `id_exploracion` int NOT NULL AUTO_INCREMENT,
  `peso` double NULL DEFAULT NULL,
  `estatura` double NULL DEFAULT NULL,
  `frecuencia_cardiaca` int NULL DEFAULT NULL,
  `frecuencia_respiratoria` int NULL DEFAULT NULL,
  `presion_arterial` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `descripcion` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `embarazo` tinyint(1) NULL DEFAULT NULL,
  `id_paciente` int NULL DEFAULT NULL,
  `paciente_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_exploracion`) USING BTREE,
  INDEX `id_paciente`(`id_paciente` ASC) USING BTREE,
  INDEX `FKrk1t3ncq8rdkq33na24hgf1y9`(`paciente_id` ASC) USING BTREE,
  CONSTRAINT `exploracion_fisica_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `paciente` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKrk1t3ncq8rdkq33na24hgf1y9` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for hibernate_sequence
-- ----------------------------
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for motivo_consulta
-- ----------------------------
DROP TABLE IF EXISTS `motivo_consulta`;
CREATE TABLE `motivo_consulta`  (
  `id_motivoconsulta` int NOT NULL AUTO_INCREMENT,
  `motivo` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `hora_llegada` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `id_paciente` int NULL DEFAULT NULL,
  `paciente_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_motivoconsulta`) USING BTREE,
  INDEX `id_paciente`(`id_paciente` ASC) USING BTREE,
  INDEX `FKg1c4jngysldrwjdhdtmlgh6hc`(`paciente_id` ASC) USING BTREE,
  CONSTRAINT `FKg1c4jngysldrwjdhdtmlgh6hc` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `motivo_consulta_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `paciente` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for paciente
-- ----------------------------
DROP TABLE IF EXISTS `paciente`;
CREATE TABLE `paciente`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `apellidos` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `documento` int NULL DEFAULT NULL,
  `edad` int NULL DEFAULT NULL,
  `fecha_nacimiento` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `direccion` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `telefono` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sexo` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
