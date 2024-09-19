import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Quotes from './Quotes/Quotes'
import QuoteDetail from "./Quotes/QuoteDetail"
import PrivateRoutes from "./PrivateRoutes"

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
            <Route path="/quotedetail/:character" element={<QuoteDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router