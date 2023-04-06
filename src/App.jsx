import { useState } from 'react'
import Title from './Components/Title.jsx'
import Details from './Components/Details.jsx'
import Competences from './Components/Competences.jsx'
import Nuages from './Components/Nuages.jsx'
import Experiences from './Components/Experiences.jsx'

import './App.css'

function App() {


  return (
    <div className="App">

      <Title />
      <Details />
      <Competences />
      <Nuages />
      <Experiences />

    </div>
  )
}

export default App
