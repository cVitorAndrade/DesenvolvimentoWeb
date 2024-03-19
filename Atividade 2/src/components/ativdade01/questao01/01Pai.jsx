import { Filho } from "./01Filho";

export function Pai () {
  return (
    <div>
      <Filho 
        height={1.8}
        weight={90}
      />

      <Filho 
        height={1.74}
        weight={69}
      />
      <Filho 
        height={1.94}
        weight={60}
      />
      
    </div>
  )
}