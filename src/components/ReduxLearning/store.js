import { createContext } from "react";

export const ContextStore = createContext();

export const intial_State = {
    // price:0,
    items: [],
    total: 0,
}

export const storeReducer = (state = intial_State, action) => {
    switch (action.type) {
        case "add_item":
            {
                return {
                    items: [...state.items, action.payload],
                    total: state.total + 1
                }
            }
        case "remove_item":
            {
                const updatedItem = state.items.filter((remove) => action.payload.item !== remove.item)
                return {
                    items: updatedItem,
                    total: state.total - 1
                }
            }
    }
}