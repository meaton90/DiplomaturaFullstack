import React from "react";
import "../../styles/components/layout/Footer.css"

const Footer = (props) =>{
    return (
        <footer>
            <div class="redes">
            <a href="https://www.linkedin.com/in/matias-eaton" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.facebook.com/matias.eaton" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/matias.eaton" target="_blank"><i class="fa-brands fa-instagram-square"></i></a>
        </div>
        <p>Diseñado por Matías Eaton - &copy;2022</p>
        </footer>
    );
}

export default Footer;
