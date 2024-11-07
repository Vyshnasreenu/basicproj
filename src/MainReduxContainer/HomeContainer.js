import React from 'react'
import MainPage from '../components/MainREDUXPOINT/MainPage'
import { addToCart } from '../Serivces/Actions/ActionFile'
import { connect } from 'react-redux'

const toGetDataFromStore = (state) => {
    console.log(state, "state")
}

const toSendDataToStore = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(toGetDataFromStore, toSendDataToStore)(MainPage)