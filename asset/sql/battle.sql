-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 11 août 2023 à 11:58
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `battle`
--

-- --------------------------------------------------------

--
-- Structure de la table `battle`
--

DROP TABLE IF EXISTS `battle`;
CREATE TABLE IF NOT EXISTS `battle` (
  `IdBattle` int NOT NULL AUTO_INCREMENT,
  `IdTeam1` int DEFAULT NULL,
  `idTeam2` int DEFAULT NULL,
  `TimeStampBattle` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`IdBattle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `engageteam1`
--

DROP TABLE IF EXISTS `engageteam1`;
CREATE TABLE IF NOT EXISTS `engageteam1` (
  `IdTeam1` int NOT NULL AUTO_INCREMENT,
  `IdBattle` int NOT NULL,
  PRIMARY KEY (`IdTeam1`,`IdBattle`),
  KEY `FK_EngageTeam1_IdBattle` (`IdBattle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `engageteam2`
--

DROP TABLE IF EXISTS `engageteam2`;
CREATE TABLE IF NOT EXISTS `engageteam2` (
  `IdTeam2` int NOT NULL AUTO_INCREMENT,
  `IdBattle` int NOT NULL,
  PRIMARY KEY (`IdTeam2`,`IdBattle`),
  KEY `FK_EngageTeam2_IdBattle` (`IdBattle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `faire_partie_de`
--

DROP TABLE IF EXISTS `faire_partie_de`;
CREATE TABLE IF NOT EXISTS `faire_partie_de` (
  `IdPlayer` int NOT NULL AUTO_INCREMENT,
  `IdTeam1` int NOT NULL,
  `IdTeam2` int NOT NULL,
  `IdPlayerinTeam` int DEFAULT NULL,
  `IdTeaminSection` int DEFAULT NULL,
  PRIMARY KEY (`IdPlayer`,`IdTeam1`,`IdTeam2`),
  KEY `FK_Faire_Partie_de_IdTeam1` (`IdTeam1`),
  KEY `FK_Faire_Partie_de_IdTeam2` (`IdTeam2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `perso`
--

DROP TABLE IF EXISTS `perso`;
CREATE TABLE IF NOT EXISTS `perso` (
  `IdPerso` int NOT NULL AUTO_INCREMENT,
  `AttPerso` int DEFAULT NULL,
  `DefPerso` int DEFAULT NULL,
  `imgIdlePerso` varchar(255) DEFAULT NULL,
  `imgAttPerso` varchar(255) DEFAULT NULL,
  `imgDefPerso` varchar(255) DEFAULT NULL,
  `imgDiePerso` varchar(255) DEFAULT NULL,
  `NamePerso` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IdPerso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `player`
--

DROP TABLE IF EXISTS `player`;
CREATE TABLE IF NOT EXISTS `player` (
  `IdPlayer` int NOT NULL AUTO_INCREMENT,
  `NamePlayer` varchar(255) DEFAULT NULL,
  `AttPlayer` int DEFAULT NULL,
  `DefPlayer` int DEFAULT NULL,
  `LevelPlayer` double DEFAULT NULL,
  `IdPersoPlayer` int DEFAULT NULL,
  `IdPerso` int DEFAULT NULL,
  PRIMARY KEY (`IdPlayer`),
  KEY `FK_Player_IdPerso` (`IdPerso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `team1`
--

DROP TABLE IF EXISTS `team1`;
CREATE TABLE IF NOT EXISTS `team1` (
  `IdTeam1` int NOT NULL AUTO_INCREMENT,
  `Buff1` int DEFAULT NULL,
  `TimeStampsTeam1` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`IdTeam1`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `team2`
--

DROP TABLE IF EXISTS `team2`;
CREATE TABLE IF NOT EXISTS `team2` (
  `IdTeam2` int NOT NULL AUTO_INCREMENT,
  `Buff2` int DEFAULT NULL,
  `TimeStampsTeam2` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`IdTeam2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `engageteam1`
--
ALTER TABLE `engageteam1`
  ADD CONSTRAINT `FK_EngageTeam1_IdBattle` FOREIGN KEY (`IdBattle`) REFERENCES `battle` (`IdBattle`),
  ADD CONSTRAINT `FK_EngageTeam1_IdTeam1` FOREIGN KEY (`IdTeam1`) REFERENCES `team1` (`IdTeam1`);

--
-- Contraintes pour la table `engageteam2`
--
ALTER TABLE `engageteam2`
  ADD CONSTRAINT `FK_EngageTeam2_IdBattle` FOREIGN KEY (`IdBattle`) REFERENCES `battle` (`IdBattle`),
  ADD CONSTRAINT `FK_EngageTeam2_IdTeam2` FOREIGN KEY (`IdTeam2`) REFERENCES `team2` (`IdTeam2`);

--
-- Contraintes pour la table `faire_partie_de`
--
ALTER TABLE `faire_partie_de`
  ADD CONSTRAINT `FK_Faire_Partie_de_IdPlayer` FOREIGN KEY (`IdPlayer`) REFERENCES `player` (`IdPlayer`),
  ADD CONSTRAINT `FK_Faire_Partie_de_IdTeam1` FOREIGN KEY (`IdTeam1`) REFERENCES `team1` (`IdTeam1`),
  ADD CONSTRAINT `FK_Faire_Partie_de_IdTeam2` FOREIGN KEY (`IdTeam2`) REFERENCES `team2` (`IdTeam2`);

--
-- Contraintes pour la table `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `FK_Player_IdPerso` FOREIGN KEY (`IdPerso`) REFERENCES `perso` (`IdPerso`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
