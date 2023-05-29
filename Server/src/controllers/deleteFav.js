const {Favorite} = require("../DB_connection");

const delFav = async (req, res) => {
    const {id} = req.params;
    const {idUser} = req.query;
    try {
        const fav = await Favorite.findOne({where: {id}});
        console.log(fav);
        await fav.removeFavorite(id);
        res.satus(200).json({success: true})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

module.exports = {delFav};