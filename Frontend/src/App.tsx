import { useState } from 'react'
import './App.css'
import MainMenu from './components/header/navbar'
import ButtonJ from './components/main/button'
import LoginButton from './components/main/login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <MainMenu />
      {/* <ButtonJ /> */}
      <LoginButton />
    </div>
  )
}

export default App
