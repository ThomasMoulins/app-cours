import './App.css'
import Router from './components/Router'

function App() {
  return (
    <>
      <header>
        <a href='/'>Home</a>
        <a href='/experiences'>Experiences</a>
        <a href='/about'>About</a>
      </header>
      <Router />
    </>
  )
}

export default App
