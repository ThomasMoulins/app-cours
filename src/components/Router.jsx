import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Quotes from './Quotes/Quotes'
import QuoteDetail from "./Quotes/QuoteDetail"
import PrivateRoutes from "./PrivateRoutes"
import AppContext from "./AppContext"

const Router = () => {
  return (
    <BrowserRouter>
      <AppContext>
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
        </AppContext>
    </BrowserRouter>
  )
}

export default Router