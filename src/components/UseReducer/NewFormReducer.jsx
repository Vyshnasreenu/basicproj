

export const INTIAL_STATE = {
    firstName: "",
    lastName: "",
    email: '',
    passWord: ''
}
const NewFormReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        // case "change_Input":
        //     return {
        //         ...state,
        //         [action.payload.name]: action.payload.value

        //     }
        case "submit": return (
            action.payload.name
        );
        // case "Reset": return action.payload.

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


        default: return null;
    }
}
// ------------------------------------------------------------

export const INTIAL_STATE_ADD = {
    content: "",
    listOfContent: [],
}


export default NewFormReducer