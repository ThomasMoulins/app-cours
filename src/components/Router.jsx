import { BrowserRouter, Routes, Route, Provider } from "react-router-dom"
import Login from "./Login"
import Quotes from './Quotes/Quotes'
import PrivateRoutes from "./PrivateRoutes"
import { useContext } from "react"

const { parent : { selectedParent } } = useContext(DataStoreContect);

const Router = () => {
  return (
    <BrowserRouter>
      <Provider value={DataStoreContect}>
        <Routes> 
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            {/* PRIVATE ROUTES */}
            <Route element={<PrivateRoutes />}>
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/quotedetail/:id" element={<QuoteDetail user={selectedParent}/>} />
            </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default Router