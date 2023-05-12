const getCharById = require("./controllers/getCharById_http.js");
var data = require("./utils/data.js");
var http = require("http");
const PORT = 3001;

http.createServer((req, res) => {
    const {url} = req;
    console.log("Peticion :"+url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(url.indexOf("/rickandmorty/character/") >= 0) {
       let cad = url.split("/");
       let id = parseInt(cad[3]);
       getCharById(res,id);
       return;
    }
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end('Pagina no encontrada');
})
.listen(PORT, 'localhost');
