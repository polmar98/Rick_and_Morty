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

/*   nueva version
const url = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = (req, res) => {
   const {id} = req.params;
   axios.get(`${url}${id}`)
   .then(response => {
      console.log(response.data.name);
      const {id,name,origin,status,gender,species,image} = response.data;
      if(response.data.name) {
         const char = {id,name,origin,status,gender,species,image};
         return res.status(200).json(char);
      } else {
         return res.status(404).send("id Not Found");
      }
    })  
   .catch(err => { 
       return res.status(500).send(err.message)
   })
}

module.exports = getCharById;

*/