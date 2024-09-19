import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Login from './Login'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router