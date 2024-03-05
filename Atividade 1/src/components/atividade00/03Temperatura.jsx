import './03Temperatura.css'

export function Temperatura () {
  const celsiusTemperature = 25
  const fahrenheitTemperature = 95
  const kelvinTemperature = 350

  const celsiusParaFahrenheit = (c) => {
    return (c * 9/5) + 32
  }

  const fahrenheitParaCelsius = (f) => {
    return (f - 32) * 5/9;
  }

  const kelvin = (k) => {
    const celsius = k - 273
    const fahrenheit = (celsius * 9/5) + 32

    return {
      celsius,
      fahrenheit
    }
  }

  return (
    <div className="container">
      <h1>
        { celsiusTemperature }°C em Fahrenheit é: { celsiusParaFahrenheit(celsiusTemperature) }°F
      </h1>
      <h1>
        { fahrenheitTemperature }°F em Celsius é: { fahrenheitParaCelsius(fahrenheitTemperature) }°C
      </h1>
      <h1>
        { kelvinTemperature }°K é em Celsius e em Fahrenheit respectivamente: { kelvin(kelvinTemperature).celsius.toFixed(2) }°C e { kelvin(kelvinTemperature).fahrenheit }°F
      </h1>
    </div>
  )
}