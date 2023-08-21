-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 21 août 2023 à 07:26
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
(1, 7, 9, 'axe-female-idle', 'axe-female-attack', 'XXXXXXXXX', 'axe-female-die', 'AXE Female'),
(2, 8, 7, 'axe-male-idle', 'axe-male-attack', 'XXXXXXXXX', 'axe-male-die', 'AXE Male'),
(3, 7, 8, 'blood-female-idle', 'blood-female-attack', 'XXXXXXXXX', 'blood-female-die', 'BLOOD Female'),
(4, 5, 6, 'blood-male-idle', 'blood-male-attack', 'XXXXXXXXX', 'blood-male-die', 'BLOOD Male'),
(5, 7, 9, 'cyro-female-idle', 'cyro-female-attack', 'XXXXXXXXX', 'cyro-female-die', 'CYRO Female'),
(6, 8, 7, 'cyro-male-idle', 'cyro-male-attack', 'XXXXXXXXX', 'cyro-male-die', 'CYRO Male'),
(7, 7, 9, 'dark-female-idle', 'dark-female-attack', 'XXXXXXXXX', 'dark-female-die', 'DARK Female'),
(8, 8, 7, 'dark-male-idle', 'dark-male-attack', 'XXXXXXXXX', 'dark-male-die', 'DARK Male'),
(9, 7, 9, 'dendro-female-idle', 'dendro-female-attack', 'XXXXXXXXX', 'dendro-female-die', 'DENDRO Female'),
(10, 8, 7, 'dendro-male-idle', 'dendro-male-attack', 'XXXXXXXXX', 'dendro-male-die', 'DENDRO Male'),
(11, 7, 9, 'electro-female-idle', 'electro-female-attack', 'XXXXXXXXX', 'electro-female-die', 'ELECTRO Female'),
(12, 8, 7, 'electro-male-idle', 'electro-male-attack', 'XXXXXXXXX', 'electro-male-die', 'ELECTRO Male'),
(13, 7, 9, 'hammer-female-idle', 'hammer-female-attack', 'XXXXXXXXX', 'hammer-female-die', 'HAMMER Female'),
(14, 8, 7, 'hammer-male-idle', 'hammer-male-attack', 'XXXXXXXXX', 'hammer-male-die', 'HAMMER Male'),
(15, 7, 9, 'hydro-female-idle', 'hydro-female-attack', 'XXXXXXXXX', 'hydro-female-die', 'HYDRO Female'),
(16, 8, 7, 'hydro-male-idle', 'hydro-male-attack', 'XXXXXXXXX', 'hydro-male-die', 'HYDRO Male'),
(17, 7, 9, 'pyro-female-idle', 'pyro-female-attack', 'XXXXXXXXX', 'pyro-female-die', 'PYRO Female'),
(18, 8, 7, 'pyro-male-idle', 'pyro-male-attack', 'XXXXXXXXX', 'pyro-male-die', 'PYRO Male'),
(19, 7, 9, 'skull-female-idle', 'skull-female-attack', 'XXXXXXXXX', 'skull-female-die', 'SKULL Female'),
(20, 8, 7, 'skull-male-idle', 'skull-male-attack', 'XXXXXXXXX', 'skull-male-die', 'SKULL Male');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
