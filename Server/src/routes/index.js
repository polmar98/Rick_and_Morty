const {Router} = require("express");
const getCharById = require('../controllers/getCharById');
const {login}= require('../controllers/login');
//const {postFav, deleteFav} = require('../controllers/handleFavorites');
const {postFav} = require("../controllers/postFav");
const {delFav} = require("../controllers/deleteFav");
const {getFav} = require("../controllers/getFav");
const {postUser} = require("../controllers/postUser");
const {getUser} = require("../controllers/getUser");

const router = Router();

router.get('/character/:id', getCharById);
router.get('/login', login);

//router.post('/fav', (postFav));
//router.delete('/fav/:id', (deleteFav));
router.get('/fav', getFav);
router.post('/user', postUser);
router.delete('/fav/:id', delFav);
router.post('/fav', postFav);
router.get('/user', getUser);

module.exports = router;