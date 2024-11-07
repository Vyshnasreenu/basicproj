import React from 'react'
import { MobileList, WacthesList } from './ProductStore'
import { Card } from 'antd'
import { CardActions, CardContent } from '@mui/material'
import { addToCart } from '../../Serivces/Actions/ActionFile'
import { useSelector } from 'react-redux'

const MainPage = (props) => {
    console.log(props, "home")
    return (
        <div>
            <section className='bg-warning p-3 text-right text-white'>
                <article>
                    Added Items : 0
                </article>
            </section>
            <main className='p-2 border text-start m-2'>
                <div >
                    Product List
                </div>
                <div className='row py-3 mx-2 bg-dark text-white'>
                    <h2>Mobiles</h2>
                    {MobileList.map((item) => (
                        <div className='col-md-4  mt-2'>
                            <Card>
                                <CardContent>
                                    <span>{item.product}</span>
                                </CardContent>
                                <CardActions>
                                    <button className='btn border' onClick={() => props?.addToCartHandler({ name: item.product, price: item.price })}> + Add to cart</button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className='row py-3 mx-2 bg-dark text-white'>
                    <h2>Wacthes</h2>
                    {WacthesList.map((item) => (
                        <div className='col-md-4  mt-2'>
                            <Card>
                                <CardContent>
                                    <span>{item.product}</span>
                                </CardContent>
                                <CardActions>
                                    <button className='btn border'> + Add to cart</button>
                                </CardActions>
                            </Card>
                        </div>
                        // </div>
                    ))}
                    {/* </div> */}
                </div>
            </main>
        </div>

    )
}

export default MainPage