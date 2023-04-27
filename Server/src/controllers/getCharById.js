import axios from "axios";
const url = "https://rickandmortyapi.com/api/character/";

const getCharById = function(id) {
      axios.get(`${url}${id}`)
      .then(res => { 
        console.log(res.data.name);
        return res.data })
      .catch(err => { 
        console.log("ID:"+id);
        return null })
}

export default getCharById;