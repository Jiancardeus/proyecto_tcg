import React from "react";

const MainMenu = ({onNavigateToCollection}) => {
    return (
        <div>
            <h1>Menú Principal</h1>
            <button >Jugar</button>
            <button onClick={onNavigateToCollection}>Mi Coleccion</button>
            <button>Tienda</button>
            <button>Ajustes</button>
        </div>
    );
};

export default MainMenu;