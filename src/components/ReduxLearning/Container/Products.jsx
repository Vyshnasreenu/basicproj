import React, { useContext } from 'react'
import { ContextStore } from '../store'

const Products = () => {

    const { addItem, state, removeItem } = useContext(ContextStore)
    const productList = [
        { item: 1, productName: "Mobiles" },
        { item: 2, productName: "Watches" },
        { item: 3, productName: "Books" }

    ]
    console.log(state, "State")
    return (
        <React.Fragment>
            <div>
                Products
            </div>
            {productList.map((prod) => (
                <div className='border p-2 m-1'>
                    <sapn>{prod.productName}</sapn>
                    <div>
                        <button className='me-2' onClick={(event) => addItem(event, prod)}>Add Item </button>
                    </div>
                </div>
            ))}
            {state.items.map((item) => (
                <div>
                    <span>{item.productName}</span>
                    <button onClick={(event) => removeItem(event, item)}>Remove item</button>

                </div>
            ))}
        </React.Fragment>
    )
}

export default Products