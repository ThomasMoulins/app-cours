import './App.css'
import Ville from './components/Ville';
import ClickButton from './components/ClickButton';

function App() {
  let name = 'Thomas';

  return (
    <>
      <div>
        <h1>Hello Ri7, je m’appelle { name }</h1>
      </div>
      <div>
        <Ville />
        <ClickButton />
      </div>
    </>
  )
}

export default App
