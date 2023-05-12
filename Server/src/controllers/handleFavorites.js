let myFavorites = [];

//const postFav = (char) => {
//    console.log("Recibido: ",char);
//    return char;
//}

const postFav = (req, res) => {
    const char = req.body;
    res.status(200).json(char);
}

const deleteFav = (req, res) => {
    const {id} = req.params;
    const urlId = Number(id);
    const newFav = myFavorites.filter((ele => { ele.id !== id}));
    myFavorites = newFav;
    return res.status(200).json(myFavorites);
}


module.exports = {
    postFav,
    deleteFav
}