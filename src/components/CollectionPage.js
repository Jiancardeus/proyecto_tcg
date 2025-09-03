import React from 'react';
import { mockCardCollection } from '../mockDatabase.js';

const CollectionPage = ({onBackToMenu}) => {
  const primeraCarta = mockCardCollection[0];
  const segundaCarta = mockCardCollection[1];
  const terceraCarta = mockCardCollection[2];
  const cuartaCarta = mockCardCollection[3];

  return (
    <div>
    <button onClick={onBackToMenu} style={{margin: '20px'}}>
        &larr; Volver al Menú
    </button>
      <header className="App-header">
       <h1>
        Catalogo de cartas de Los Caballeros Solarees
       </h1>

       <h2>
        {primeraCarta.name}
       </h2>
       <img
          src={primeraCarta.image}
          alt={primeraCarta.name}
          style={{width: '250px'}}
        />
        <p>Costo de Maná: {primeraCarta.cost}</p>
        <p>Ataque: {primeraCarta.attack}</p>
        <p>Vida: {primeraCarta.health}</p>
        <p>Habilidad unica: {primeraCarta.description}</p>

        <h3>
        {segundaCarta.name}
        </h3>
        <img
            src={segundaCarta.image}
            alt={segundaCarta.name}
            style={{width: '250px'}}
        />
        <p>Costo de Maná: {segundaCarta.cost}</p>
        <p>Ataque: {segundaCarta.attack}</p>
        <p>Vida: {segundaCarta.health}</p>
        <p>Habilidad unica: {segundaCarta.description}</p>

        <h4>
        {terceraCarta.name}
        </h4>
        <img
            src={terceraCarta.image}
            alt={terceraCarta.name}
            style={{width: '250px'}}
        />
        <p>Costo de Maná: {terceraCarta.cost}</p>
        <p>Ataque: {terceraCarta.attack}</p>
        <p>Vida: {terceraCarta.health}</p>
        <p>Habilidad unica: {terceraCarta.description}</p>

        <h5>
        {cuartaCarta.name}
        </h5>
        <img
            src={cuartaCarta.image}
            alt={cuartaCarta.name}
            style={{width: '250px'}}
        />
        <p>Costo de Maná: {cuartaCarta.cost}</p>
        <p>Ataque: {cuartaCarta.attack}</p>
        <p>Vida: {cuartaCarta.health}</p>
        <p>Habilidad unica: {cuartaCarta.description}</p>


      </header>
    </div>
  );
}

export default CollectionPage;