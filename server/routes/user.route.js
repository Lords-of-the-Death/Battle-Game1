const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.createPlayer);
router.get('/all', userController.getAllPlayer);
router.get('/hero/:id', userController.getPerso);

module.exports = router;