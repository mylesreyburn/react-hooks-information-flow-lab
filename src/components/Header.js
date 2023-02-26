import React from "react";

function Header( { isDarkMode, onDarkModeClick }){

    let darkModeState = isDarkMode
    
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick} >
                {darkModeState ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header