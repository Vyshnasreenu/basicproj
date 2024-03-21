import React, { createContext } from 'react'
import { useContext } from 'react'
import MyContext from './MyContext'
const C22 = () => {
    const user = useContext(MyContext)

    return (
        <div>Hi {user} component</div>
    )
}

export default C22