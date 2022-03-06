import React from "react";
import '../styles/components/pages/HomePage.css'
import { Bienvenidos } from "../components/DatosNombres";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <Bienvenidos/>
                </div>
            </div>
            <div className="testimonio right">
                <span className="cita">Simplemente excelente</span>
                <span className="autor">Juan Perez</span>
            </div>
        </main>
    );
}

export default HomePage;