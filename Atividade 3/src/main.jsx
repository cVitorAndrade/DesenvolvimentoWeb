import React from 'react'
import ReactDOM from 'react-dom/client'
import FunctionContextA from './FunctionContextA.jsx'
import ClassA from './ClassContext.jsx'
import { ComponenteAvo } from './02Pokemon/ComponenteAvo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FunctionContextA />
    <ClassA />

    <ComponenteAvo />
  </React.StrictMode>,
)
