const {Router} = require("express");
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const {postFav, deleteFav} = require('../controllers/handleFavorites');
const router = Router();

router.get('/character/:id', getCharById);
router.get('/login', login);

//router.post('/fav', (req, res) => {
//    const char = postFav(req.body);
//    res.status(200).json(char);
//});

router.post('/fav', (postFav));
router.delete('/fav/:id', (deleteFav));

module.exports = router;