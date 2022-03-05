import React from "react";

const Header = (props) =>{
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="images/logo.jpg" width={500} alt="Medicine-Tech" />
                    <h1>Medicine</h1>
                </div>
            </div>        
        </header>
    );
}

export default Header;