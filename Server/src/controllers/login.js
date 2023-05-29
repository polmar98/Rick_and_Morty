const {User} = require("../DB_connection");

const login = async (req, res) => {
    const {email, password} = req.query;
    try {
        if(!email || !password) return res.status(400).json({message: 'Faltan Datos'});
        const user = await User.findOne({where: {email}});
        if(!user) return res.status(404).json({message: 'Usuario No encontrado'});
        if(user.password !== password) return res.status(403).json({message: "Clave Invalida"});
        res.status(200).json({access: true, userId: user.id});
    } catch (error) {
        res.status(500).json({message: error.message})
    }    
}

module.exports = {login};

