const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.createPlayer);
router.get('/all', userController.getAllPlayer);
router.get('/top',userController.getTOP5)
//router.post('/register', userController.createPlayer);
router.get('/hero/:id', userController.getPerso);
router.get('/getplayerperso',userController.getPlayerPerso)


module.exports = router;