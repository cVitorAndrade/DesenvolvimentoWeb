import { NumeroContext } from "./ComponenteAvo";
import { useContext } from "react";

export function ComponenteNeto () {
  const { numero } = useContext(NumeroContext)

  return (
    <div>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 2}.png`}
        alt="" 
      />
    </div>
  )
}