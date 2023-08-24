-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 24 août 2023 à 06:52
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `perso`
--

INSERT INTO `perso` (`IdPerso`, `AttPerso`, `DefPerso`, `imgIdlePerso`, `imgAttPerso`, `imgDefPerso`, `imgDiePerso`, `NamePerso`) VALUES
(1, 7, 9, 'axe-female-idle', 'axe-female-attack', 'axe-female-defence', 'axe-female-die', 'AXE Female'),
(2, 8, 7, 'axe-male-idle', 'axe-male-attack', 'axe-male-defence', 'axe-male-die', 'AXE Male'),
(3, 7, 8, 'blood-female-idle', 'blood-female-attack', 'blood-female-defence', 'blood-female-die', 'BLOOD Female'),
(4, 5, 6, 'blood-male-idle', 'blood-male-attack', 'blood-male-defence', 'blood-male-die', 'BLOOD Male'),
(5, 7, 9, 'cryo-female-idle', 'cryo-female-attack', 'cryo-female-defence', 'cryo-female-die', 'CYRO Female'),
(6, 8, 7, 'cryo-male-idle', 'cryo-male-attack', 'cryo-male-defence', 'cryo-male-die', 'CYRO Male'),
(7, 7, 9, 'dark-female-idle', 'dark-female-attack', 'dark-female-defence', 'dark-female-die', 'DARK Female'),
(8, 8, 7, 'dark-male-idle', 'dark-male-attack', 'dark-male-defence', 'dark-male-die', 'DARK Male'),
(9, 7, 9, 'bandage-female-idle', 'bandage-female-attack', 'bandage-female-defence', 'bandage-female-die', 'BANDAGE Female'),
(10, 8, 7, 'bandage-male-idle', 'bandage-male-attack', 'bandage-male-defence', 'bandage-male-die', 'BANDAGE Male'),
(11, 7, 9, 'electro-female-idle', 'electro-female-attack', 'electro-female-bandage', 'electro-female-die', 'ELECTRO Female'),
(12, 8, 7, 'electro-male-idle', 'electro-male-attack', 'electro-male-defence', 'electro-male-die', 'ELECTRO Male'),
(13, 7, 9, 'hammer-female-idle', 'hammer-female-attack', 'hammer-female-defence', 'hammer-female-die', 'HAMMER Female'),
(14, 8, 7, 'hammer-male-idle', 'hammer-male-attack', 'hammer-male-defence', 'hammer-male-die', 'HAMMER Male'),
(15, 7, 9, 'hydro-female-idle', 'hydro-female-attack', 'hydro-female-defence', 'hydro-female-die', 'HYDRO Female'),
(16, 8, 7, 'hydro-male-idle', 'hydro-male-attack', 'hydro-male-defence', 'hydro-male-die', 'HYDRO Male'),
(17, 7, 9, 'pyro-female-idle', 'pyro-female-attack', 'pyro-female-defence', 'pyro-female-die', 'PYRO Female'),
(18, 8, 7, 'pyro-male-idle', 'pyro-male-attack', 'pyro-male-defence', 'pyro-male-die', 'PYRO Male'),
(19, 7, 9, 'skull-female-idle', 'skull-female-attack', 'skull-female-defence', 'skull-female-die', 'SKULL Female'),
(20, 8, 7, 'skull-male-idle', 'skull-male-attack', 'skull-male-defence', 'skull-male-die', 'SKULL Male');

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
  `IdPerso` int DEFAULT NULL,
  PRIMARY KEY (`IdPlayer`),
  KEY `FK_Player_IdPerso` (`IdPerso`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `player`
--

INSERT INTO `player` (`IdPlayer`, `NamePlayer`, `AttPlayer`, `DefPlayer`, `LevelPlayer`, `IdPerso`) VALUES
(1, 'Gilbert', 7, 5, 1, 1),
(2, 'Isabelle', 6, 8, 1, 2),
(3, 'Cloé', 5, 9, 2, 3),
(4, 'Gontrand', 8, 9, 2, 4),
(5, 'Maurice', 5, 8, 3, 5),
(6, 'Alphonsine', 5, 10, 1, 6);

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

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `top`
-- (Voir ci-dessous la vue réelle)
--
DROP VIEW IF EXISTS `top`;
CREATE TABLE IF NOT EXISTS `top` (
`NamePlayer` varchar(255)
,`LevelPlayer` double
);

-- --------------------------------------------------------

--
-- Structure de la vue `top`
--
DROP TABLE IF EXISTS `top`;

DROP VIEW IF EXISTS `top`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `top`  AS SELECT `player`.`NamePlayer` AS `NamePlayer`, `player`.`LevelPlayer` AS `LevelPlayer` FROM `player` ORDER BY `player`.`LevelPlayer` DESC, `player`.`NamePlayer` ASC LIMIT 0, 55  ;

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
