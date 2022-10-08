import AppRouter from './AppRouter';
import MainMenu from './components/header/navbar'
import ButtonJ from './components/main/button'
import LoginButton from './components/main/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css'

function App() {

  return (
    <div className="App">
      <MainMenu />
      <AppRouter />
    </div >
  )
}

export default App
