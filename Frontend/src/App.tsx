import { Component, useState } from 'react'
import AppRouter from './AppRouter';
import './App.css'
import MainMenu from './components/header/navbar'
import ButtonJ from './components/main/button'
import LoginButton from './components/main/login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      {/* <AppRouter /> */}
      <Router>
        <MainMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
