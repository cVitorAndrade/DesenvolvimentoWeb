import './01Filho.css'

export function Filho ({ weight, height }) {
  const imc = weight / (height * height);

  const calcSituation = (value) => {
    if ( value < 18 ) {
      return "Abaixo do Peso"
    } else if ( value > 25 ) {
      return "Acima do Peso"
    } else {
      return "Peso Ideal"
    }
  }

  return (
    <div className="container">
      <h1> Imc: { imc }</h1>
      <h3
        className={`${imc < 18 ? 'abaixo' : ''}${imc > 25 ? 'acima' : ''}${imc > 18 && imc < 25 ? 'ideal' : ''}`}
      >
        { calcSituation(imc) }
      </h3>
    </div>
  )
}