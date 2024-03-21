import React, { useReducer, useState } from 'react'
import NewFormReducer, { INTIAL_STATE } from './NewFormReducer'

const MyReducer = () => {

    const [state, dispatch] = useReducer(NewFormReducer, INTIAL_STATE)
    const [reset, setRes] = useState(state)

    const changehandeler = (e) => {
        dispatch({ type: "change_Input", payload: { name: e.target.name, value: e.target.value } })
    }
    const submithandler = (e) => {
        e.preventDefault();
        dispatch({ type: "submit", payload: { name: alert("Submit successfully...") } })
    }

    const resethandler = () => {
        setRes("")
        // dispatch({type:"Reset",payload:{clear: state}})
    }
    return (
        <div>
            <form action=''>
                <div className='container border'>
                    <h1>Registration Form</h1>
                    <div className='row p-2 text-center' style={{ marginTop: "40px" }}>
                        <div className='col-md-6'>
                            <label>FirstName</label>
                        </div>
                        <div className='col-md-5'>
                            <input type='text' className='form-control' name="firstName" onChange={changehandeler} />
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-md-6'>
                            <label>LastName</label>
                        </div>
                        <div className='col-md-5'>
                            <input type='text' className='form-control' name="lastName" onChange={changehandeler} />
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-md-6'>
                            <label>Email</label>
                        </div>
                        <div className='col-md-5'>
                            <input type='email' className='form-control' name='email' onChange={changehandeler} />
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-md-6'>
                            <label>Password</label>
                        </div>
                        <div className='col-md-5'>
                            <input type='password' className='form-control' name="passWord" onChange={changehandeler} />
                        </div>
                    </div>
                    <div className='row '>
                        <div className='d-flex justify-content-center  '>
                            <button className='btn btn-success mr-2' type='submit' onClick={submithandler}>Submit</button>
                            <button className='btn btn-danger' type='reset' onClick={resethandler}>Reset</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default MyReducer