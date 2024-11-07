export const addToCart = (productData) => {
    console.log(productData)
    return {
        type: "Add_To_Cart",
        data: productData,
    }
}

export const removeCart = (productData) => {
    return {
        type: "remove_Cart",
        data: productData,
    }
}
