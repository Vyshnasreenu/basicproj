
export const INTIAL_STATE = {
    firstName: "",
    lastName: "",
    email: '',
    passWord: ''
}
const NewFormReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case "change_Input":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case "submit": {
            return state
        }
        case "Reset": {
            return INTIAL_STATE
        }

        // -----------------------------------------------AddingItem_Redux
        case "CHANGE_INPUT_TYPE": {
            return {
                ...state,
                [action.payload?.name]: action.payload?.value
            }
        }
        case "ADD_ITEMS": {
            return { listOfContent: [...state.listOfContent, action.payload.list] }
        }


        default: return state;
    }
}
// ------------------------------------------------------------

export const INTIAL_STATE_ADD = {
    content: "",
    listOfContent: [],
}


export default NewFormReducer