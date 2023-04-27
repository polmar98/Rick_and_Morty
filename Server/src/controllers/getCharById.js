const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character/";

const getCharById = function(res, id) {
      axios.get(`${url}${id}`)
      .then(response => {console.log(response.data.name);
         const {id,name,origin,status,gender,species,image} = response.data;
         res.writeHead(200, { "Content-type": "application/json" });
         res.end(JSON.stringify({id,name,origin,status,gender,species,image}));
      })  
      .catch(err => { 
         console.log(err);
         res.writeHead(500, { "Content-type": "text/plain" });
         res.end(err);   
       })
}

module.exports = getCharById;