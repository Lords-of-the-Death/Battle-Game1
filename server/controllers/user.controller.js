const mysql = require('mysql');
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

// User
/*const createPlayer = (req, res) => {
  // utilise req.body de body-parser
  const { NamePlayer, AttPlayer, DefPlayer, LevelPlayer } = req.body;
  // vérifier si les champs sont remplis
  if (!NamePlayer || !AttPlayer || !DefPlayer || !LevelPlayer) {
    return res.status(400).json({
      error: 'donnée manquante',
    })
  }
  const query = 'INSERT INTO player (NamePlayer, AttPlayer, DefPlayer, LevelPlayer) VALUES (?,?,?,?)';
  conn.query(query, [ NamePlayer, AttPlayer, DefPlayer, LevelPlayer ], (err) => {
    if (err) {
      console.error('erreur lors de l\'insertion des données : ' + err);
      res.status(500).json({ error: 'erreur lors de l\'insertion des données' });
    } else {
      res.status(200).json({ message: 'utilisateur enregistré' });
    }
  });
};
*/
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


const getTOP5 = (req, res) => {
  const query = 'select * FROM top';
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

  } else {

    const query = 'INSERT INTO player (NamePlayer, AttPlayer, DefPlayer, LevelPlayer, idPerso) VALUES (?,?,?,?,?)';
    conn.query(query, [NamePlayer, AttPlayer, DefPlayer, LevelPlayer, idPerso], (err) => {
      if (err) {
        console.error(`erreur lors de l'insertion des données : ` + err);
        res.status(500).json({ error: `erreur lors de l'insertion des données` });
      } else {
        res.status(200).json({ message: 'utilisateur enregistré' });
      }
    })
  };
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

const getPlayerPerso = (req, res) => {
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

const getBattle = (req, res) => {
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
const updateDataBattle = (req, res) => {
  const { LevelPlayer } = req.body;
  const query = 'UPDATE player SET LevelPlayer = ? WHERE Idplayer = ?';
  conn.query(query, [LevelPlayer, req.params.id], (err) => {
    if (err) {
      console.error('Erreur lors de la modification de l\'utilisateur: ' + err);
      res.status(500).json({
        error: 'Erreur lors de la modification de l\'utilisateur'
      });
    } else {
      console.log(res);
      res.status(200).json({ message: 'Utilisateur modifié' });
    }
  });
}

module.exports = {
  createPlayer,
  getAllPlayer,
  getTOP5,
  getPerso,
  getPlayerPerso,
  getBattle,
  updateDataBattle
};