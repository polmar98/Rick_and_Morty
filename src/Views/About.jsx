import NavBar from "../components/NavBar/NavBar";
import PageAbout from "../components/PageAbout/PageAbout"
const About = function() {
   const Ninguna = ()=>{};
   return (
    <div>
         <NavBar onSearch = {Ninguna}/>   
         <PageAbout/>
    </div>

   )
}

export default About;