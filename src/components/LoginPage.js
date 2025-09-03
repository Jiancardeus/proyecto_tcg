import React from "react";

const LoginPage = ({onLogin}) => {
    return (
        <div>
            <h1>Login del juego TCG</h1>
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" /> 
            <button onClick={onLogin}>Ingresar</button>
        </div>
    );
};

export default LoginPage;