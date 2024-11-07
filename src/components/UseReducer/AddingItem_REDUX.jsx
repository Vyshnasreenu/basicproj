import React, { useReducer } from 'react'
import NewFormReducer, { INTIAL_STATE_ADD } from './NewFormReducer'

const AddingItem_REDUX = () => {

    const [data, dispatch] = useReducer(NewFormReducer, INTIAL_STATE_ADD)

    const changeHandler = (e) => {
        dispatch({ type: "CHANGE_INPUT_TYPE", payload: { name: e.target.name, value: e.target.value } })
    }


    const addItems = (e) => {
        // e.preventDefault();
        dispatch({ type: "ADD_ITEMS", payload: { list: data.content } })
        data.content = ""
    }

    return (
        <div>
            <div className='container mt-2'>
                <div className='d-flex justify-content-center border'>
                    <h1>Adding Items</h1>
                </div>
                <div className='mt-3 p-2 row'>
                    <div className='col-md-6'>
                        <input type='text' className='form-control' name='content' onChange={changeHandler} />
                    </div>
                    <div className='col-md-2'>
                        <button type='button' value="ADD" className='btn btn-primary' onClick={addItems}>+ ADD</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddingItem_REDUX