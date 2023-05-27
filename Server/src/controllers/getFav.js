const {Favorite} = require("../DB_connection");

const getFav = async (req, res) => {
    const {idUser} = req.query;

    try {
        const favoritos = await Favorite.findAll();
        res.status(200).json(favoritos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getFav};