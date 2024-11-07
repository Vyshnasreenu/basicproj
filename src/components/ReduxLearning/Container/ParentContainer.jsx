import React, { useContext, useReducer } from 'react'
import { ContextStore, intial_State, storeReducer } from '../store'

const ParentContainer = (props) => {
    const [state, dispatch] = useReducer(storeReducer, intial_State)

    const addItem = (event, product) => {
        console.log(product)
        dispatch({ type: "add_item", payload: product })
    }
    const removeItem = (event, product) => {
        console.log(product)
        dispatch({ type: "remove_item", payload: product })
    }

    return (
        <div>
            <ContextStore.Provider value={{ state, addItem, removeItem }}>
                {props.children}
            </ContextStore.Provider>
        </div>
    )
}

export default ParentContainer