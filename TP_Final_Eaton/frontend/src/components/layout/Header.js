import React from "react";
import "../../styles/components/layout/Header.css"

const Header = (props) =>{
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/117BB/production/_107411617_gettyimages-953436176.jpg" width={100} alt="Imagen" />
                    <h1>Medicina y tecnología</h1>
                </div>
            </div>        
        </header>
    );
}

export default Header;