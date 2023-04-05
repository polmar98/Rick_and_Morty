import Form from '../components/Form/Form';
const Landing = function({login}) {

   return (
      <div>
          <Form login={login}/>
 
          <div className="landContenido">
              <p className="parrafoLanding">Rick y Morty (en inglés: Rick and Morty) es una serie de televisión americana
               de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim,
               también se emitió en Cartoon Network. La serie sigue las desventuras de un científico,
               Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre
               la vida doméstica y los viajes espaciales, temporales e intergalácticos. Dan Harmon,
               el co-creador de la serie y Justin Roiland son los encargados de las voces principales
               de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer
               y Sarah Chalke.

               La serie se originó por un cortometraje rudimentario animado por Roiland para el
               festival de cine Channel 101 llamado Doc and Mharti, una parodia de los principales
               protagonistas de Back to the Future. Cuando la cadena NBC despidió a Harmon en 2013
               por discusiones entre él y los ejecutivos de la serie que había creado, Community,
               él y Roiland desarrollaron una serie basada en los personajes ya creados por Roiland.
              </p>
       
          </div> 
          <h1 className="productor">Rick & Morty - Project</h1>
      </div>
   )
}

export default Landing;