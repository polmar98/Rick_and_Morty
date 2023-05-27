const {Favorite, User} = require("../DB_connection");

const postFav = async ( req, res) => {
    const {name, origin, status, image, species, gender, id}  = req.body;
    const {idUser} = req.query;
    try {
        if(!name || !origin || !status || !image || !species || !gender || !id) {
            return res.status(401).json({message: "Faltan Datos"});
        }
        const [fav, created] = await Favorite.create({ 
            name,
            origin,
            status,
            image,
            species,
            gender,
            idApi: id,
            userId: idUser
        });
        const favoritos = await Favorite.findAll();
        res.status(200).json(favoritos);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = { postFav};