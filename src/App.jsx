import { useState } from 'react'
import { RouterApp } from './routes/RouterApp';
import { BrowserRouter } from 'react-router-dom';

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
