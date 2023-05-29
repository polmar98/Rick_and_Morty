const {Favorite, User} = require("../DB_connection");

const postFav = async ( req, res) => {
    const {name, origin, status, image, species, gender, id}  = req.body;
    const {idUser} = req.query;
    const id_api = id;
    const personaje = {idApi:id_api, name, status, species, gender, image}
    try {
        if(!name ||  !status || !image || !species || !gender || !id) {
            console.log("Faltan Datos");
            return res.status(401).json({message: "Faltan Datos"});
        };
        console.log(personaje);
        if(personaje.status == 'unknown') personaje.status = 'Unknown';
        await Favorite.findOrCreate({where: {idApi: id_api}, defaults: personaje });

        const favoritos = await Favorite.findAll();
        res.status(200).json(favoritos);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

module.exports = { postFav};