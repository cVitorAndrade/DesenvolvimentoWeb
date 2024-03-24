import { ComponenteNeto } from "./ComponenteNeto";
import { NumeroContext } from "./ComponenteAvo";
import { useContext } from "react";

export function ComponenteFilho () {
  const { numero } = useContext(NumeroContext)

  return (
    <div>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 1}.png`}
        alt="" 
      />

      <ComponenteNeto />
    </div>
  )
}