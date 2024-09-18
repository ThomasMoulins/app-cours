import './App.css'
import FilmList from './components/FilmList'

function App() {
  return (
    <>
    <FilmList title='Films Populaire' link='https://api.themoviedb.org/3/movie/popular?language=fr&page=1'/>
    <FilmList title='Films les mieux notée' link='https://api.themoviedb.org/3/movie/top_rated?language=fr&page=1'/>
    </>
  )
}

export default App
