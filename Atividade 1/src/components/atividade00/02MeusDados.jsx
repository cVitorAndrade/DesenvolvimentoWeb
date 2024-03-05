import React from "react"
import './01MeusDados.css';


function MeusDadosFunction ({ name, course, university }) {
  return (
    <div className="meus-dados">
      <h1>{ name }</h1>
      <h1> { course }</h1>
      <h1> { university }</h1>
    </div>
  )
}

const MeusDadosArrowReturn = ({ name, course, university }) => {
  return (
    <div className="meus-dados">
      <h1>{ name }</h1>
      <h1> { course }</h1>
      <h1> { university }</h1>
    </div>
  )
}

const MeusDadosArrowNoReturn = ({ name, course, university }) => (
  <div className="meus-dados">
    <h1>{ name }</h1>
    <h1> { course }</h1>
    <h1> { university }</h1>
  </div>
)

class MeusDadosClass extends React.Component {
  render ({ name, course, university }) {
    return (
      <div className="meus-dados">
        <h1>{ name }</h1>
        <h1> { course }</h1>
        <h1> { university }</h1>
      </div>
    )
  }
}

export {
  MeusDadosFunction,
  MeusDadosArrowReturn,
  MeusDadosArrowNoReturn,
  MeusDadosClass
}