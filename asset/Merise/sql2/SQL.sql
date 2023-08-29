DROP TABLE IF EXISTS perso ;
CREATE TABLE perso (IdPerso INT AUTO_INCREMENT NOT NULL,
AttPerso INT,
DefPerso INT,
NamePerso VARCHAR(255),
imgIdlePerso VARCHAR(255),
PRIMARY KEY (IdPerso)) ENGINE=InnoDB;

DROP TABLE IF EXISTS player ;
CREATE TABLE player (Idplayer INT AUTO_INCREMENT NOT NULL,
NamePlayer VARCHAR(255),
Attplayer INT,
DefPlayer INT,
LevelPlayer INT,
IdPerso INT,
PRIMARY KEY (Idplayer)) ENGINE=InnoDB;

DROP TABLE IF EXISTS team1 ;
CREATE TABLE team1 (IdTeam1 INT AUTO_INCREMENT NOT NULL,
Buff1 INT,
IdLien1 INT,
PRIMARY KEY (IdTeam1)) ENGINE=InnoDB;

DROP TABLE IF EXISTS team2 ;
CREATE TABLE team2 (IdTeam2 INT AUTO_INCREMENT NOT NULL,
Buff2 INT,
IdLien2 INT,
PRIMARY KEY (IdTeam2)) ENGINE=InnoDB;

DROP TABLE IF EXISTS battles ;
CREATE TABLE battles (IdBattle INT AUTO_INCREMENT NOT NULL,
IdTeam1 INT,
IdTeam2 INT,
PRIMARY KEY (IdBattle)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Créer ;
CREATE TABLE Créer (Idplayer INT AUTO_INCREMENT NOT NULL,
IdPerso INT NOT NULL,
PRIMARY KEY (Idplayer,
 IdPerso)) ENGINE=InnoDB;

DROP TABLE IF EXISTS appartenirteam1 ;
CREATE TABLE appartenirteam1 (Idplayer INT AUTO_INCREMENT NOT NULL,
IdTeam1 INT NOT NULL,
IdLien1 INT,
IdTeam1 INT,
Idplayer INT,
PRIMARY KEY (Idplayer,
 IdTeam1)) ENGINE=InnoDB;

DROP TABLE IF EXISTS appartenirteam2 ;
CREATE TABLE appartenirteam2 (Idplayer INT AUTO_INCREMENT NOT NULL,
IdTeam2 INT NOT NULL,
IdLien2 INT,
IdTeam2 INT,
Idplayer INT,
PRIMARY KEY (Idplayer,
 IdTeam2)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Appartenir1 ;
CREATE TABLE Appartenir1 (IdTeam1 INT AUTO_INCREMENT NOT NULL,
IdBattle INT NOT NULL,
PRIMARY KEY (IdTeam1,
 IdBattle)) ENGINE=InnoDB;

DROP TABLE IF EXISTS Appartenir2 ;
CREATE TABLE Appartenir2 (IdTeam2 INT AUTO_INCREMENT NOT NULL,
IdBattle INT NOT NULL,
PRIMARY KEY (IdTeam2,
 IdBattle)) ENGINE=InnoDB;

ALTER TABLE Créer ADD CONSTRAINT FK_Créer_Idplayer FOREIGN KEY (Idplayer) REFERENCES player (Idplayer);

ALTER TABLE Créer ADD CONSTRAINT FK_Créer_IdPerso FOREIGN KEY (IdPerso) REFERENCES perso (IdPerso);
ALTER TABLE appartenirteam1 ADD CONSTRAINT FK_appartenirteam1_Idplayer FOREIGN KEY (Idplayer) REFERENCES player (Idplayer);
ALTER TABLE appartenirteam1 ADD CONSTRAINT FK_appartenirteam1_IdTeam1 FOREIGN KEY (IdTeam1) REFERENCES team1 (IdTeam1);
ALTER TABLE appartenirteam1 ADD CONSTRAINT FK_appartenirteam1_IdTeam1 FOREIGN KEY (IdTeam1) REFERENCES team1 (IdTeam1);
ALTER TABLE appartenirteam1 ADD CONSTRAINT FK_appartenirteam1_Idplayer FOREIGN KEY (Idplayer) REFERENCES player (Idplayer);
ALTER TABLE appartenirteam2 ADD CONSTRAINT FK_appartenirteam2_Idplayer FOREIGN KEY (Idplayer) REFERENCES player (Idplayer);
ALTER TABLE appartenirteam2 ADD CONSTRAINT FK_appartenirteam2_IdTeam2 FOREIGN KEY (IdTeam2) REFERENCES team2 (IdTeam2);
ALTER TABLE appartenirteam2 ADD CONSTRAINT FK_appartenirteam2_IdTeam2 FOREIGN KEY (IdTeam2) REFERENCES team2 (IdTeam2);
ALTER TABLE appartenirteam2 ADD CONSTRAINT FK_appartenirteam2_Idplayer FOREIGN KEY (Idplayer) REFERENCES player (Idplayer);
ALTER TABLE Appartenir1 ADD CONSTRAINT FK_Appartenir1_IdTeam1 FOREIGN KEY (IdTeam1) REFERENCES team1 (IdTeam1);
ALTER TABLE Appartenir1 ADD CONSTRAINT FK_Appartenir1_IdBattle FOREIGN KEY (IdBattle) REFERENCES battles (IdBattle);
ALTER TABLE Appartenir2 ADD CONSTRAINT FK_Appartenir2_IdTeam2 FOREIGN KEY (IdTeam2) REFERENCES team2 (IdTeam2);
ALTER TABLE Appartenir2 ADD CONSTRAINT FK_Appartenir2_IdBattle FOREIGN KEY (IdBattle) REFERENCES battles (IdBattle);
