import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Login from './Login'
import FilmList from './FilmList'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/filmlist' element={<FilmList />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router