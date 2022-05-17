import React from "react";
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
    <body class="nosotros">
        <main class="holder">
        <h2>Socios</h2>
        <div class="institucion">
            <figure>
                <img src="https://www.elhospital.com/documenta/imagenes/8101601/tomografo-computarizado-Somatom-Force-de-Siemens-g1.jpg" alt="Tomógrafo"/>
                <div class="ocultos">
                    <a href="https://www.centrodealtatecnologia.com.uy/articulos/" target="_blank">
                        <h3>Web page</h3>
                    </a>
                </div>
            </figure>
            <div class="info">
                <h4>Centro de Alta Tecnologia (Uruguay)</h4>
                <p>
                    Este sitio de Uruguay contiene mucha información respecto a estudios por imagen
                </p>
            </div>
        </div>
        <div class="institucion">
            <figure>
                <img src="http://archivos.usuaria.org.ar/sitio/salud.jpg" alt="Foro IT SALUD"/>
                <div class="ocultos">
                    <a href="https://itsalud.usuaria.org.ar/" target="_blank">
                        <h3>Web page</h3>
                    </a>
                </div>
            </figure>
            <div class="info">
                <h4>IT Salud forum (Argentina)</h4>
                <p>
                    Este sitio es un foro que se dedica al trabajo IT en la salud, en el se presentan proyectos como MAIS(Marco Argentino de Interoperabilidad en Salud), cyberseguridad en la medicina y muchos temas aún más intersantes.
                </p>
            </div>
        </div>
        <div class="institucion">
            <figure>
                <img src="https://gmitresalud.com.ar/wp-content/uploads/2021/03/logo-mitre-1536x723.png" alt="Kronos"/>
                <div class="ocultos">
                    <a href="https://gmitresalud.com.ar/2021/06/24/centro-medico-de-alto-rendimiento/" target="_blank">
                        <h3>Web page</h3>
                    </a>
                </div>
            </figure>
            <div class="info">
                <h4>Kronos (Argentina)</h4>
                <p>
                    Centro de alto rendimiento y recuparación que desarrolla las últimas prácticas de la medicina moderna en los deportistas.
                </p>
            </div>
        </div>
    </main>
    </body>
    );
}

export default NosotrosPage;