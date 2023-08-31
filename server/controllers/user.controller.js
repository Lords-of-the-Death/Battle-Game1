const mysql = require('mysql');
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})


const getAllPlayer = (req, res) => {
    const query = 'SELECT * FROM `player`';
    conn.query(query, (err, result) => {
      if (err) {
        console.error('Erreur de la récupération des données ' + err);
        res.status(500).json({ error: 'Erreur lors de la récupération des données dans getAllPlayer' });
      } else {
        res.status(200).json(result);
      }
    })

  }


  const getTOP5 = (req,res) => {
    const query ='select * FROM top';
    conn.query(query, (err, result) => {
      if (err) {
        console.error('Erreur de la récupération des données ' + err);
        res.status(500).json({ error: 'Erreur lors de la récupération des données dans getTOP5' });
      } else {
        res.status(200).json(result);
      }
    })

  }

  const createPlayer = (req, res) => {
    // utilise req.body de body-parser
    const { NamePlayer, AttPlayer, DefPlayer, LevelPlayer, idPerso } = req.body;
    // vérifier si les champs sont remplis
    if (!NamePlayer || !AttPlayer || !DefPlayer || !LevelPlayer || !idPerso) {
      return res.status(400).json({
        error: 'donnée manquante',
      })

    }else{

    const query = 'INSERT INTO player (NamePlayer, AttPlayer, DefPlayer, LevelPlayer, idPerso) VALUES (?,?,?,?,?)';
    conn.query(query, [ NamePlayer, AttPlayer, DefPlayer, LevelPlayer, idPerso ], (err) => {
      if (err) {
        console.error(`erreur lors de l'insertion des données : ` + err);
        res.status(500).json({ error: `erreur lors de l'insertion des données` });
      } else {
        res.status(200).json({ message: 'utilisateur enregistré' });
      }
    })};
  };


  const getPerso = (req, res) => {
    const query = "SELECT * FROM perso WHERE idPerso = ?";
    conn.query(query, [req.params.id], (err, result) => {
      if (err) {
        console.error('Erreur de la récupération des données ' + err);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
      } else {
        res.status(200).json(result);
      }
    })
  
  };

  const getPlayerPerso =(req, res) => {
    const query = 'SELECT `player`.*, LEFT(`perso`.`imgIdlePerso`,LENGTH(`perso`.`imgIdlePerso`)-5) AS personame FROM `player` LEFT JOIN `perso` ON `player`.`IdPerso` = `perso`.`IdPerso`';
    conn.query(query, (err, result) => {
      if (err) {
        console.error('Erreur de la récupération des données ' + err);
        res.status(500).json({ error: 'Erreur lors de la récupération des données dans getPlayerPerso' });
      } else {
        res.status(200).json(result);
      }
    })
  }

  const getBattle =(req, res) => {
    const query = 'SELECT * FROM battledata';
    conn.query(query, (err, result) => {
      if (err) {
        console.error('Erreur de la récupération des données ' + err);
        res.status(500).json({ error: 'Erreur lors de la récupération des données dans getBattle' });
      } else {
        res.status(200).json(result);
      }
    })
  }

  const createTeam1 = (req, res) => {
    // utilise req.body de body-parser
    const { Buff1 } = req.body;
    // vérifier si les champs sont remplis
    if ( Buff1 == "0") {
      return res.status(400).json({
        error: 'donnée manquante',
      })

    }else{

    const query = 'INSERT INTO team1 (Buff1) VALUES (?)';
    conn.query(query, [ Buff1 ], (err) => {
      if (err) {
        console.error(`erreur lors de l'insertion des données createTeam1 : ` + err);
        res.status(500).json({ error: `erreur lors de l'insertion des données createTeam1` });
      } else {
        res.status(200).json({ message: 'utilisateur enregistré' });
      }
    })};
  };

  const createTeam2 = (req, res) => {
    // utilise req.body de body-parser
    const { Buff2 } = req.body;
    // vérifier si les champs sont remplis
    if ( Buff2 == "0") {
      return res.status(400).json({
        error: 'donnée manquante',
      })

    }else{

    const query = 'INSERT INTO team2 (Buff2) VALUES (?)';
    conn.query(query, [ Buff2 ], (err) => {
      if (err) {
        console.error(`erreur lors de l'insertion des données createTeam2 : ` + err);
        res.status(500).json({ error: `erreur lors de l'insertion des données createTeam2` });
      } else {
        res.status(200).json({ message: 'utilisateur enregistré' });
      }
    })};
  };

  const getShowTeam1 =(req, res) => {
    const query = 'SELECT MAX(IdTeam1) AS MaxIdT1 FROM team1';
    conn.query(query, (err, result) => {
      if (err) {
        console.error('Erreur de la récupération des données getShowTeam1 ' + err);
        res.status(500).json({ error: 'Erreur lors de la récupération des données dans getShowTeam1 ' });
      } else {
        res.status(200).json(result);
      }
    })
  }

  const getShowTeam2 =(req, res) => {
    const query = 'SELECT MAX(IdTeam2) AS MaxIdT2 FROM team2';
    conn.query(query, (err, result) => {
      if (err) {
        console.error('Erreur de la récupération des données getShowTeam2 ' + err);
        res.status(500).json({ error: 'Erreur lors de la récupération des données dans getShowTeam2 ' });
      } else {
        res.status(200).json(result);
      }
    })
  }

  const createTeamPlayer1 = (req, res) => {
    // utilise req.body de body-parser
    const { IdTeam1, Idplayer } = req.body;
    // vérifier si les champs sont remplis
    if ( Idplayer == "") {
      return res.status(400).json({
        error: 'donnée manquante',
      })

    }else{

    const query = 'INSERT INTO `appartenirteam1`(`IdTeam1`, `Idplayer`) VALUES (?,?)';
    conn.query(query, [ IdTeam1, Idplayer ], (err) => {
      if (err) {
        console.error(`erreur lors de l'insertion des données createTeamPlayer1 : ` + err);
        res.status(500).json({ error: `erreur lors de l'insertion des données createTeamPlayer1` });
      } else {
        res.status(200).json({ message: 'utilisateur enregistré' });
      }
    })};
  };

  const createTeamPlayer2 = (req, res) => {
    // utilise req.body de body-parser
    const { IdTeam2, Idplayer } = req.body;
    // vérifier si les champs sont remplis
    if ( Idplayer == "") {
      return res.status(400).json({
        error: 'donnée manquante',
      })

    }else{

    const query = 'INSERT INTO `appartenirteam2`( `IdTeam2`, `Idplayer`) VALUES (?,?)';
    conn.query(query, [ IdTeam2, Idplayer ], (err) => {
      if (err) {
        console.error(`erreur lors de l'insertion des données createTeamPlayer2 : ` + err);
        res.status(500).json({ error: `erreur lors de l'insertion des données createTeamPlayer2` });
      } else {
        res.status(200).json({ message: 'utilisateur enregistré' });
      }
    })};
  };

  const setPlayerValue = (req, res) => {
    const id = req.params.id;
    const {Attplayer, DefPlayer, LevelPlayer} = req.body;


    const query = "UPDATE `player` SET `Attplayer`= ?,`DefPlayer`= ? ,`LevelPlayer`= ? WHERE `Idplayer`= ?";

    conn.query(query, [Attplayer,DefPlayer,LevelPlayer,id], (err, result) => {
      if (err) {
        console.error('Erreur de la récupération des données ' + err);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
      } else {
        res.status(200).json(result);
      }
    })
  }




module.exports = {
  createPlayer,
  getAllPlayer,
  getTOP5,
  getPerso,
  getPlayerPerso,
  getBattle,
  createTeam1,
  createTeam2,
  getShowTeam1,
  getShowTeam2,
  createTeamPlayer1,
  createTeamPlayer2,
  setPlayerValue
};