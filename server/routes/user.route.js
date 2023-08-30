const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.createPlayer);
router.get('/all', userController.getAllPlayer);
router.get('/top',userController.getTOP5);
router.get('/hero/:id', userController.getPerso);
router.get('/getplayerperso',userController.getPlayerPerso);
router.get('/battle',userController.getBattle);
router.post('/team1',userController.createTeam1);
router.post('/team2',userController.createTeam2);
router.get('/getteam1', userController.getShowTeam1);
router.get('/getteam2', userController.getShowTeam2);
router.put('/creatteam1', userController.createTeamPlayer1);
router.put('/creatteam2', userController.createTeamPlayer2)
module.exports = router;