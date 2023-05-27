const {User} = require("../DB_connection");

const getUser = async(req, res) => {
    try {
        const usuarios = await User.findAll();
        res.status(201).json(usuarios);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getUser};