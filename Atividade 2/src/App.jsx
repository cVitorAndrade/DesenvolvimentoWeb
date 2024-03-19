import { Pai } from "./components/ativdade01/questao01/01Pai";
import * as PC from "./components/ativdade01/questao01/02MeuPC"
import { Arena, World, Hero, Enemy} from "./components/ativdade01/questao01/03Batalha";

export default function App () {
  return (
    <div>
      <Pai />

      <hr />

      <PC.Memoria 
        name="Asgard Loki W2 Rgb 3200mhz Cl16 Ddr4"
        price="R$288,85"
      />

      <PC.PlacaDeVideo 
        name="RTX4060 8GB GDDR6 128BITS 1-CLICK OC 2X GALAX 46NSL8MD8LOC"
        price="R$2.108,99"
      />

      <PC.PlacaMae 
        name="Asus TUF GAMING X670E-PLUS (AM5/DDR5/4x M.2 /PCIe 5.0/USB3.2)"
        price="R$3.500,00"
      />

      <hr />

      <World>
        <Arena
          arena="Tokio Dome – Underground Arena"
        >
          <Hero 
            name="Batman"
            img="https://i.pinimg.com/564x/84/96/88/849688ec785ab194e4b89411e0946a56.jpg"
          />

          <Enemy 
            name="Coringa"
            img="https://i.pinimg.com/564x/81/78/43/817843b1e78fe99befe5938304afc53a.jpg"
          />
        </Arena>

        <Arena
          arena="Tokio Dome – Underground Arena"
        >
          <Hero 
            name="Flash"
            img="https://i.pinimg.com/564x/64/6d/74/646d746fbd83aa45873b0516e4ffdfd0.jpg"
          />

          <Enemy 
            name="Reverse Flah"
            img="https://i.pinimg.com/564x/f2/18/a5/f218a5be489f7fcfe87382e377416d78.jpg"
          />
        </Arena>
      </World>

    </div>
  )
}