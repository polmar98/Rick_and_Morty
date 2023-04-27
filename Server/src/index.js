import getCharById from "./controllers/getCharById.js";
//var data = require("./utils/data.js");
import data from "./utils/data.js";
import http from "http";
//var http = require("http");
const PORT = 3001;

http.createServer((req, res) => {
    const {url} = req;
    console.log("Peticion :"+url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(url.indexOf("/rickandmorty/character/") >= 0) {
       let cad = url.split("/");
       let id = parseInt(cad[3]);
       let respuesta = {};
       let promise ={};
       if(id>20){
            promise = new Promise(function(resolve, reject) {
            respuesta = getCharById(id);
            if(respuesta) {
               resolve(respuesta);
            }else {
               reject(err);
            }
   
          })
      
          promise.then(function(respuesta) {
            console.log(respuesta);
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(respuesta);
          })
          .catch(function(err) {
            res.writeHead(404, { "Content-type": "text/plain" });
            res.end('No se pudo ejecutar la consulta: '+err);             
          })
          return;
       }
       let hallado = data.find((ele) => ele.id == id);
       if(hallado) {
          res.writeHead(200, { "Content-type": "application/json" });
          res.end(JSON.stringify(hallado));
       } else {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.end('Id no encontrado');
       }
       return;
    }
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end('Pagina no encontrada');
})
.listen(PORT, 'localhost');
