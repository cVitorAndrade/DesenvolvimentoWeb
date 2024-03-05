import { MeusDadosArrowNoReturn } from "./components/atividade00/01MeusDados"
import { MeusDadosFunction } from "./components/atividade00/02MeusDados"
import { Temperatura } from "./components/atividade00/03Temperatura"



export function App () {
  return (
    <div>
      <MeusDadosArrowNoReturn />

      <MeusDadosFunction
        name="Carlos Vitor Andrade Macêdo"
        course="Engenharia de Software"
        university="Universidade Federal do Ceará"
      />

      <Temperatura />
    </div>
  )
}