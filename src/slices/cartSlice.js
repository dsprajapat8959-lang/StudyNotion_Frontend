import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    totalItems: localStorage.getItem("totalItems")? (localStorage.getItem("totalItems")) : 0 
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setTotalItems: (state, value) => {
            state.totalItems = value.payload
        },
        // Add items
        addItem: (state, value) => {
            state.totalItems += 1
            toast.success("Item added successfully")
        },
        // remove items
        removeItem: (state, value) => {
            state.totalItems -= 1
            toast.success("Item removed successfully")
        },
        // reset items
        resetItems: (state, value) => {
            state.totalItems = 0
            toast.success("Card reset successfully")
        },
    },
})

export const{addItem,removeItem,resetItems,setTotalItems} = cartSlice.actions;
export default cartSlice.reducer;