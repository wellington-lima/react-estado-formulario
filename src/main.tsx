import React from 'react'
import ReactDOM from 'react-dom/client'
//import { Formulario } from './modelo1/Formulario';
import { Formulario } from './modelo2/Formulario';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Formulario />
  </React.StrictMode>
)
