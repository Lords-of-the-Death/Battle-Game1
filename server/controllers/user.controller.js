const mysql = require('mysql');
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

// User
const createPlayer = (req, res) => {
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




module.exports = {
  createPlayer,
  getAllPlayer,
  getTOP5
};