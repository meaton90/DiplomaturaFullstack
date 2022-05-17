import React from "react";
import '../styles/components/pages/HomePage.css'
import { Bienvenidos } from "../components/DatosNombres";

const HomePage = (props) => {
    return (
        <body class="index">
            <div class="inicio container">
                <h1>BIENVENIDOS</h1>

                <p>Este sitio está orientado para toda persona que desee encontrar información sobre los úlitmos avances y tratamientos de la medicina moderna, orientada a la rehabilitación.</p>
            </div>
            <div class="fin container">
                <img src="https://videolibrary.globalcastmd.com/60445190/61467633/9f9ca9314c5c6ef4d1b91b8efaef28c7/large/download-9-thumbnail.jpg" alt="Medicos" />

                <h1>Nuestra misión</h1>

                <p>Conectar experiencias y personas que deseen compartir sus experiencias y conocimientos</p>
            </div>
        </body>
    );
}

export default HomePage;