import './03Batalha.css'

export function Hero ({ name, img }) {
  return (
    <div>
      <img src={img} alt="" />
      <h1>Nome: { name } </h1>
    </div>
  )
}

export function Enemy ({ name, img }) {
  return (
    <div>
      <img src={img} alt="" />
      <h1>Nome: { name } </h1>
    </div>
  )
}

export function Arena (props) {
  return (
    <div className="arena">
      <h1>{ props.arena }</h1>
      { props.children }
    </div>
  )
}

export function World (props) {
  return (
    <div className='mundo'>
      { props.children }
    </div>
  )
}