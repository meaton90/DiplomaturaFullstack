import React from "react";
import '../styles/components/pages/NosotrosPage.css';
import { NombrePuesto, Imagenes } from "../components/DatosNombres";


// const nompues = require(nompues.json);

const nombres = ["Juan Gomez", "Luisana Manhardt","José Luis","Fernanda Perez","Fernando Niembro"];
const imagenes= ["images/nosotros/nosotros1.jpg","images/nosotros/nosotros2.jpg","images/nosotros/nosotros3.jpg","images/nosotros/nosotros4.jpg","images/nosotros/nosotros5.jpg"];
// const puestos= ["Gerente General","Gerente de Marketing","Gerente de logística","Gerente de RRHH","Gerente de Sistemas"];
const nompues=[{
    "nombre":"Juan Gomez",
    "puesto":"Gerente General"
},
{
    "nombre":"Luisana Manhardt",
    "puesto":"Gerente de Marketing"
},
{
    "nombre":"José Luis",
    "puesto":"Gerente de logística"
},
{
    "nombre":"Fernanda Perez",
    "puesto":"Gerente de RRHH"
},
{
    "nombre":"Fernando Niembro",
    "puesto":"Gerente de Sistemas"
}];



const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>
                    Laborum ullamco qui occaecat id pariatur laborum deserunt exercitation sunt. Eiusmod nulla et exercitation anim minim aute pariatur aute proident aliquip occaecat et. Elit culpa Lorem tempor occaecat. Nulla ullamco officia do excepteur culpa laboris labore pariatur in nisi pariatur. Duis labore anim laboris anim proident consectetur dolor. Sit aute veniam commodo aliqua ex esse ad sint incididunt culpa quis dolor consequat. Mollit non minim nulla pariatur.

                    Amet eiusmod occaecat labore occaecat nulla ex in proident consequat ad. Sint mollit aute elit ut consequat nulla quis nostrud nulla ad. Ad non nostrud voluptate nulla.

                    Ipsum id elit elit occaecat aliqua ad ullamco proident commodo qui. Nostrud magna culpa excepteur laboris aute velit ullamco consectetur. Officia ut dolore Lorem non commodo cillum amet in fugiat deserunt.
                </p>
            </div>
            <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <Imagenes imagenes={imagenes[0]} nomimg={nombres[0]}/>
                        <NombrePuesto nombre={nompues[0].nombre} puesto={nompues[0].puesto}/>
                    </div>
                </div>
                <div className="personas">
                    <div className="persona">
                        <Imagenes imagenes={imagenes[1]} nomimg={nombres[1]}/>
                        <NombrePuesto nombre={nompues[1].nombre} puesto={nompues[1].puesto}/>
                    </div>
                </div>
                <div className="personas">
                    <div className="persona">
                        <Imagenes imagenes={imagenes[2]} nomimg={nombres[2]}/>
                        <NombrePuesto nombre={nompues[2].nombre} puesto={nompues[2].puesto}/>
                    </div>
                </div>
                <div className="personas">
                    <div className="persona">
                        <Imagenes imagenes={imagenes[3]} nomimg={nombres[3]}/>
                        <NombrePuesto nombre={nompues[3].nombre} puesto={nompues[3].puesto}/>
                    </div>
                </div>
                <div className="personas">
                    <div className="persona">
                        <Imagenes imagenes={imagenes[4]} nomimg={nombres[4]}/>
                        <NombrePuesto nombre={nompues[4].nombre} puesto={nompues[4].puesto}/>
                    </div>
                </div>
        </section>

    );
}

export default NosotrosPage;