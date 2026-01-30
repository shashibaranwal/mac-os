import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/Windows/MacWindow'

const App = () => {
  return (
    <>
      <main>
        <MacWindow default={{x: 200, y: 200}}>Hello! Welcome to my Mac OS</MacWindow>
        <Nav />
        <Dock />
      </main>
    </>
  )
}

export default App