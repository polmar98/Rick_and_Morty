const url = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

// UTILIZANDO SOLO PROMESAS
const getCharById = (req, res) => {
   const {id} = req.params;
   console.log("ID Solicitado :", id);
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


/*
//UTILIZANDO PROMESAS con async - await
const getCharById = async(req, res) => {
   const {id} = req.params;
   console.log("ID Solicitado :", id);
   try {
      const response = await axios.get(`${url}${id}`);
      console.log(response.data.name);
      const {id,name,origin,status,gender,species,image} = response.data;
      if(response.data.name) {
         const char = {id,name,origin,status,gender,species,image};
         res.status(200).json(char);
      } else {
         res.status(404).send("id Not Found");
      }
    
   } catch (error) {
      res.status(500).send(error.message)
   }
}
*/

module.exports = getCharById;