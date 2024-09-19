import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext(null);

const AppContext = ({children}) => {
    const [store, setStore] = useState({
        username: '',
        apiData: '',
        theme: 'light'
    })

    return (
        <MyContext.Provider value={{store, setStore}}>
            {children}
        </MyContext.Provider>
    )
}

export default AppContext