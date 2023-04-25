import style from "../PageAbout/PageAbout.module.css";
function PageAbout(){
    const imagen = "../img/fotopol.jpg";
    return (
      <div className={style.flex}>
         <div className={style.divAbout}>
             <h1 className={style.titulo}>Paul Martinez Navarro</h1>
             <h4 className={style.subtitulo}>Developer Designer Full Stack</h4>
             <p className={style.parrafos}>Profesional de Sistemas.  Experiencia laboral como técnico en mantenimiento, 
                reparación de computadores, soporte, instalación y administración de redes y 
                como analista y desarrollador de software. </p>
             <p className={style.parrafos}>Entrenado en el campo Técnico para el desarrollo de la profesión de manera general,
                con alto grado de profesionalismo y excelente capacidad de análisis de diagnósticos
                de equipos, detección de fallas, propuestas de solución y reparación de los mismos.
                Con excelente experiencia en la instalación, configuración y mantenimiento de redes
                Novell Netware, Windows Server, Workgroups, NT Server y redes Inalámbricas. 
                Habilidad practica en el manejo de cableado estructurado.   
                Capacitado en el campo del Software con amplia destreza para el análisis y desarrollo
                de aplicaciones para gestión de datos, con altos conocimientos de contabilidad,
                Nomina, Bancos, Facturación, Inventarios, Cartera y gestión de Clientes, Cartera 
                y gestión de Proveedores, Administración de Propiedad Horizontal, Gestión hotelera, 
                créditos Financieros y otros campos.</p>  
             <p className={style.parrafos}>Capacitado para el diseño de sitios y páginas Web con excelente manejo de html, css, PHP, C#, Javascript, 
                 React, phyton, entre otros. 
                 Con gran actitud de servicio, dinámico, competente, gran capacidad de asimilación
                 de nuevos conceptos y recursos, dispuesto a apoyar la toma de decisiones empresariales,
                 destreza en las relaciones interpersonales, con alto grado de profesionalismo,
                 reserva y manejo excelente de los recursos y herramientas tecnológicas modernas.  </p>    
          </div>
          <div className={style.divAbout}>
             <h4 className={style.subtitulo}>Modulos Desarrollados</h4>
             <ul className={style.ulAbout}>
                 <li>Contabilidad</li>
                 <li>Inventario-Facturacion y Cartera</li>
                 <li>Cuentas por pagar</li>
                 <li>Tesoreria</li>
                 <li>Nomina</li>
                 <li>Creditos</li>
                 <li>Propiedad Horizontal</li>
                 <li>Control Hotelero</li>
                 <li>Parqueaderos</li>
                 <li>Administracion Colegios</li>
                 <li>Punto de venta</li>
                 <li>Restaurantes y Casinos</li>
                 <li>Joyeria y CompraVentas</li>
             </ul>
             <div className={style.divFoto}>
                 <div className={style.foto}></div>
             </div>
             
          </div>
       </div>
    )
}

export default PageAbout;