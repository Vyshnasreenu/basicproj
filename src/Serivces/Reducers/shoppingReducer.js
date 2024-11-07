
export const initial_state = {
    items: [],
    count: 0,
}

const cartItemReducer = (state = initial_state, action) => {
    switch (action.type) {
        case "Add_To_Cart": {
            console.log(state, "reducer")
            return {
                ...state,
                items: [...state.items, action.data],
                count: state.count + 1
            }
        }
        default:
            return state
    }
}
export default cartItemReducer;