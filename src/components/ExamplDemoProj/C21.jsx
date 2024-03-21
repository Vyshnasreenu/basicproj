import React, { createContext, useContext } from 'react'

import MyContext from './MyContext'
const C21 = () => {
    const state = useContext(MyContext)
    console.log(state)
    return (
        <div>Hi c21 component.....
            {/* {state} */}

        </div>

    )
}

export default C21