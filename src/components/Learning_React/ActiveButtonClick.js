import React, { useState } from 'react'
import { Button } from '@mui/material';
import './style.css'
const ActiveButtonClick = () => {
    const [isAcitve, setAcitve] = useState()


    const ACTIVE = "bg-primary"
    const btnClick = (active) => {
        setAcitve(active)
    }
    return (
        <div className=''>

            <div className='container mt-4 border'>
                <h3>React active buttons</h3>
                <div className='row p-2'>
                    <div className='col-md-3'>
                        <button className={isAcitve === 0 ? `btn ${ACTIVE} ` : "btn border active"}
                            // variant='outlined'
                            // sx={{
                            //     ':hover': {
                            //         background: 'blue', // theme.palette.primary.main
                            //         color: 'white',
                            //     },
                            // }}
                            onClick={() => btnClick(0)}>React 1.0</button>
                    </div>
                    <div className='col-md-3'>
                        <button className={isAcitve === 1 ? `btn ${ACTIVE} ` : "btn border active"} variant='outlined' onClick={() => btnClick(1)}>React 2.0</button>
                    </div>
                    <div className='col-md-3'>
                        <button className={isAcitve === 2 ? `btn ${ACTIVE} ` : "btn border active"} variant='outlined' onClick={() => btnClick(2)}>React 3.0</button>
                    </div>
                    <div className='col-md-3'>
                        <button className={isAcitve === 3 ? `btn ${ACTIVE} ` : "btn border active"} variant='outlined' onClick={() => btnClick(3)}>React 4.0</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ActiveButtonClick