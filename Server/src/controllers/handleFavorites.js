//let allCharacters = [];


const postFav = (req, res) => {
    const char = req.body;
    res.status(200).json(char);
}

const deleteFav = (req, res) => {
    const {id} = req.params;
    const urlId = Number(id);
    console.log("Id a Borrar : ",urlId);
    //const newFav = allCharacters.filter((ele => { ele.id !== urlId}));
    //allCharacters = newFav;
    return res.status(200).json({id : urlId});
}


module.exports = {
    postFav,
    deleteFav
}