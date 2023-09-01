-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 29 août 2023 à 09:20
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
-- Structure de la table `appartenirteam1`
--

DROP TABLE IF EXISTS `appartenirteam1`;
CREATE TABLE IF NOT EXISTS `appartenirteam1` (
  `IdLien1` int NOT NULL AUTO_INCREMENT,
  `IdTeam1` int DEFAULT NULL,
  `Idplayer` int DEFAULT NULL,
  PRIMARY KEY (`IdLien1`),
  KEY `FK_appartenirteam1_Idplayer` (`Idplayer`),
  KEY `FK_appartenirteam1_IdTeam1` (`IdTeam1`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `appartenirteam1`
--

INSERT INTO `appartenirteam1` (`IdLien1`, `IdTeam1`, `Idplayer`) VALUES
(4, 1, 1),
(5, 1, 2),
(6, 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `appartenirteam2`
--

DROP TABLE IF EXISTS `appartenirteam2`;
CREATE TABLE IF NOT EXISTS `appartenirteam2` (
  `IdLien2` int NOT NULL AUTO_INCREMENT,
  `IdTeam2` int DEFAULT NULL,
  `Idplayer` int DEFAULT NULL,
  PRIMARY KEY (`IdLien2`),
  KEY `FK_appartenirteam2_Idplayer` (`Idplayer`),
  KEY `FK_appartenirteam2_IdTeam2` (`IdTeam2`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `appartenirteam2`
--

INSERT INTO `appartenirteam2` (`IdLien2`, `IdTeam2`, `Idplayer`) VALUES
(1, 1, 4),
(2, 1, 5),
(3, 1, 6),
(4, 1, 7),
(5, 1, 8);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `battledata`
-- (Voir ci-dessous la vue réelle)
--
DROP VIEW IF EXISTS `battledata`;
CREATE TABLE IF NOT EXISTS `battledata` (
`Attplayer` int
,`Buff` int
,`DefPlayer` int
,`IdBattle` int
,`IdLien1` int
,`Idplayer` int
,`imgIdlePerso` varchar(255)
,`LevelPlayer` int
,`NamePerso` varchar(255)
,`NamePlayer` varchar(255)
,`Team` varchar(5)
);

-- --------------------------------------------------------

--
-- Structure de la table `battles`
--

DROP TABLE IF EXISTS `battles`;
CREATE TABLE IF NOT EXISTS `battles` (
  `IdBattle` int NOT NULL AUTO_INCREMENT,
  `IdTeam1` int DEFAULT NULL,
  `IdTeam2` int DEFAULT NULL,
  PRIMARY KEY (`IdBattle`),
  KEY `FK_battles_IdTeam1_Appartenir1` (`IdTeam1`),
  KEY `FK_battles_IdTeam2_Appartenir2` (`IdTeam2`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `battles`
--

INSERT INTO `battles` (`IdBattle`, `IdTeam1`, `IdTeam2`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `perso`
--

DROP TABLE IF EXISTS `perso`;
CREATE TABLE IF NOT EXISTS `perso` (
  `IdPerso` int NOT NULL AUTO_INCREMENT,
  `AttPerso` int DEFAULT NULL,
  `DefPerso` int DEFAULT NULL,
  `NamePerso` varchar(255) DEFAULT NULL,
  `imgIdlePerso` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IdPerso`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `perso`
--

INSERT INTO `perso` (`IdPerso`, `AttPerso`, `DefPerso`, `NamePerso`, `imgIdlePerso`) VALUES
(1, 7, 9, 'AXE Female', 'axe-female-idle'),
(2, 8, 7, 'AXE Male', 'axe-male-idle'),
(3, 7, 8, 'BLIND Female', 'blind-female-idle'),
(4, 5, 6, 'BLIND Male', 'blind-male-idle'),
(5, 7, 9, 'CYRO Female', 'cryo-female-idle'),
(6, 8, 7, 'CYRO Male', 'cryo-male-idle'),
(7, 7, 9, 'DARK Female', 'dark-female-idle'),
(8, 8, 7, 'DARK Male', 'dark-male-idle'),
(9, 7, 9, 'BANDAGE Female', 'bandage-female-idle'),
(10, 8, 7, 'BANDAGE Male', 'bandage-male-idle'),
(11, 7, 9, 'ELECTRO Female', 'electro-female-idle'),
(12, 8, 7, 'ELECTRO Male', 'electro-male-idle'),
(13, 7, 9, 'HAMMER Female', 'hammer-female-idle'),
(14, 8, 7, 'HAMMER Male', 'hammer-male-idle'),
(15, 7, 9, 'HYDRO Female', 'hydro-female-idle'),
(16, 8, 7, 'HYDRO Male', 'hydro-male-idle'),
(17, 7, 9, 'PYRO Female', 'pyro-female-idle'),
(18, 8, 7, 'PYRO Male', 'pyro-male-idle'),
(19, 7, 9, 'SKULL Female', 'skull-female-idle'),
(20, 8, 7, 'SKULL Male', 'skull-male-idle');

-- --------------------------------------------------------

--
-- Structure de la table `player`
--

DROP TABLE IF EXISTS `player`;
CREATE TABLE IF NOT EXISTS `player` (
  `Idplayer` int NOT NULL AUTO_INCREMENT,
  `NamePlayer` varchar(255) DEFAULT NULL,
  `Attplayer` int DEFAULT NULL,
  `DefPlayer` int DEFAULT NULL,
  `LevelPlayer` int DEFAULT NULL,
  `IdPerso` int DEFAULT NULL,
  PRIMARY KEY (`Idplayer`),
  KEY `FK_player_IdPerso` (`IdPerso`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `player`
--

INSERT INTO `player` (`Idplayer`, `NamePlayer`, `Attplayer`, `DefPlayer`, `LevelPlayer`, `IdPerso`) VALUES
(1, 'Gilbert', 7, 5, 1, 1),
(2, 'Isabelle', 6, 8, 1, 2),
(3, 'Cloé', 5, 9, 2, 3),
(4, 'Gontrand', 8, 9, 2, 4),
(5, 'Maurice', 5, 8, 3, 5),
(6, 'Alphonsine', 5, 10, 1, 6),
(7, 'Dupont', 8, 7, 1, 10),
(8, 'kpoiipoiuojlkj', 1, 1, 1, 1),
(9, 'fff', 1, 1, 1, 4),
(10, '4444', 5, 6, 1, 4),
(11, 'jlhklhlo', 7, 9, 1, 7);

-- --------------------------------------------------------

--
-- Structure de la table `team1`
--

DROP TABLE IF EXISTS `team1`;
CREATE TABLE IF NOT EXISTS `team1` (
  `IdTeam1` int NOT NULL AUTO_INCREMENT,
  `Buff1` int DEFAULT NULL,
  `IdLien1` int DEFAULT NULL,
  PRIMARY KEY (`IdTeam1`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `team1`
--

INSERT INTO `team1` (`IdTeam1`, `Buff1`, `IdLien1`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `team2`
--

DROP TABLE IF EXISTS `team2`;
CREATE TABLE IF NOT EXISTS `team2` (
  `IdTeam2` int NOT NULL AUTO_INCREMENT,
  `Buff2` int DEFAULT NULL,
  `IdLien2` int DEFAULT NULL,
  PRIMARY KEY (`IdTeam2`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `team2`
--

INSERT INTO `team2` (`IdTeam2`, `Buff2`, `IdLien2`) VALUES
(1, 3, 1);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `top`
-- (Voir ci-dessous la vue réelle)
--
DROP VIEW IF EXISTS `top`;
CREATE TABLE IF NOT EXISTS `top` (
`LevelPlayer` int
,`NamePlayer` varchar(255)
);

-- --------------------------------------------------------

--
-- Structure de la vue `battledata`
--
DROP TABLE IF EXISTS `battledata`;

DROP VIEW IF EXISTS `battledata`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `battledata`  AS SELECT `battles`.`IdBattle` AS `IdBattle`, `appartenirteam1`.`IdLien1` AS `IdLien1`, `team1`.`Buff1` AS `Buff`, 'Team1' AS `Team`, `player`.`Idplayer` AS `Idplayer`, `player`.`NamePlayer` AS `NamePlayer`, `player`.`Attplayer` AS `Attplayer`, `player`.`DefPlayer` AS `DefPlayer`, `player`.`LevelPlayer` AS `LevelPlayer`, `perso`.`NamePerso` AS `NamePerso`, `perso`.`imgIdlePerso` AS `imgIdlePerso` FROM (`battles` join (((`appartenirteam1` left join `team1` on((`appartenirteam1`.`IdTeam1` = `team1`.`IdTeam1`))) left join `player` on((`appartenirteam1`.`Idplayer` = `player`.`Idplayer`))) left join `perso` on((`player`.`IdPerso` = `perso`.`IdPerso`)))) union select `battles`.`IdBattle` AS `IdBattle`,`appartenirteam2`.`IdLien2` AS `IdLien2`,`team2`.`Buff2` AS `Buff`,'Team2' AS `Team`,`player`.`Idplayer` AS `Idplayer`,`player`.`NamePlayer` AS `NamePlayer`,`player`.`Attplayer` AS `Attplayer`,`player`.`DefPlayer` AS `DefPlayer`,`player`.`LevelPlayer` AS `LevelPlayer`,`perso`.`NamePerso` AS `NamePerso`,`perso`.`imgIdlePerso` AS `imgIdlePerso` from (`battles` join (((`appartenirteam2` left join `team2` on((`appartenirteam2`.`IdTeam2` = `team2`.`IdTeam2`))) left join `player` on((`appartenirteam2`.`Idplayer` = `player`.`Idplayer`))) left join `perso` on((`player`.`IdPerso` = `perso`.`IdPerso`))))  ;

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
-- Contraintes pour la table `appartenirteam1`
--
ALTER TABLE `appartenirteam1`
  ADD CONSTRAINT `FK_appartenirteam1_Idplayer` FOREIGN KEY (`Idplayer`) REFERENCES `player` (`Idplayer`),
  ADD CONSTRAINT `FK_appartenirteam1_IdTeam1` FOREIGN KEY (`IdTeam1`) REFERENCES `team1` (`IdTeam1`);

--
-- Contraintes pour la table `appartenirteam2`
--
ALTER TABLE `appartenirteam2`
  ADD CONSTRAINT `FK_appartenirteam2_Idplayer` FOREIGN KEY (`Idplayer`) REFERENCES `player` (`Idplayer`),
  ADD CONSTRAINT `FK_appartenirteam2_IdTeam2` FOREIGN KEY (`IdTeam2`) REFERENCES `team2` (`IdTeam2`);

--
-- Contraintes pour la table `battles`
--
ALTER TABLE `battles`
  ADD CONSTRAINT `FK_battles_IdTeam1_Appartenir1` FOREIGN KEY (`IdTeam1`) REFERENCES `team1` (`IdTeam1`),
  ADD CONSTRAINT `FK_battles_IdTeam2_Appartenir2` FOREIGN KEY (`IdTeam2`) REFERENCES `team2` (`IdTeam2`);

--
-- Contraintes pour la table `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `FK_player_IdPerso` FOREIGN KEY (`IdPerso`) REFERENCES `perso` (`IdPerso`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
