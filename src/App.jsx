import './App.css'
import FilmList from './components/FilmList'

function App() {
  return (
    <>
    <FilmList title='Popular Movies' link='https://api.themoviedb.org/3/movie/popular?language=fr&page=1'/>
    <FilmList title='Top rated Movies' link='https://api.themoviedb.org/3/movie/top_rated?language=fr&page=1'/>
    </>
  )
}

export default App
