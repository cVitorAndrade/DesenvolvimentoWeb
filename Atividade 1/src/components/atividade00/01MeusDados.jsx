
import React from 'react';
import './01MeusDados.css';

//usando function
function MeusDadosFunction() {
  return (
    <div className="meus-dados">
      <h1>Paulo Vitor Pinheiro da Silva</h1>
      <h1>Engenharia de Software</h1>
      <h1>UFC - Universidade Federal do Ceará, Campus Quixadá</h1>
    </div>
  );
}

// Versão usando arrow function com return
const MeusDadosArrowReturn = () => (
  <div className="meus-dados">
    <h1>Paulo Vitor Pinheiro da Silva</h1>
    <h1>Engenharia de Software</h1>
    <h1>UFC - Universidade Federal do Ceará, Campus Quixadá</h1>
  </div>
);

// Versão usando arrow function sem return
const MeusDadosArrowNoReturn = () => (
  <div className="meus-dados">
    <h1>Paulo Vitor Pinheiro da Silva</h1>
    <h1>Engenharia de Software</h1>
    <h1>UFC - Universidade Federal do Ceará, Campus Quixadá</h1>
  </div>
);

// Versão usando classes
class MeusDadosClass extends React.Component {
  render() {
    return (
      <div className="meus-dados">
        <h1>Paulo Vitor Pinheiro da Silva</h1>
        <h1>Engenharia de Software</h1>
        <h1>UFC - Universidade Federal do Ceará, Campus Quixadá</h1>
      </div>
    );
  }
}

export { MeusDadosFunction, MeusDadosArrowReturn, MeusDadosArrowNoReturn, MeusDadosClass };