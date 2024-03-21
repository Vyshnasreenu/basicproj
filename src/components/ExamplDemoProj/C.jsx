import React, { createContext, useState } from 'react'
import C21 from './C21'
import MyContext from './MyContext'

const C = ({ children }) => {
    // console.log(children)
    const [state, setState] = useState("Sreenu")

    return (
        <div>
            <MyContext.Provider value={state}>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default C