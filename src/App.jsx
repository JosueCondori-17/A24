import { useState } from 'react'
import { RouterApp } from './routes/RouterApp';
import { BrowserRouter } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <RouterApp></RouterApp>
      </BrowserRouter>

    </>
  )
}

export default App
