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
