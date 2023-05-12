const data = require('../utils/users');

function buscarUsuario(ele,email,password) {
    return ele.email == email && ele.password == password;
};

const login = (req, res) => {
    const {email, password} = req.query;
    let buscado = [];
    buscado = data.find((ele) => buscarUsuario(ele, email, password));
    console.log(`Peticion: login=${email} clave=${password}`);
    const access = buscado ? true : false;
    return res.status(200).json({access: access});
}

module.exports = login;

