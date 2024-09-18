import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Quotes from './Quotes/Quotes'
import Quote from './Quotes/Quote'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            {/* PRIVATE ROUTES */}
            <Route element={<PrivateRoutes />}>
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/quote" element={<Quote />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router