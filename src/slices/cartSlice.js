import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    totalItems: localStorage.getItem("totalItems")? (localStorage.getItem("totalItems")) : 0,
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    total: localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0,

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setTotalItems: (state, value) => {
            state.totalItems = value.payload
            localStorage.setItem("totalItems", state.totalItems)
        },
        // Add items
        addItem: (state, value) => {
            const item = value.payload
            state.cart.push(item)
            state.totalItems = state.cart.length
            state.total = state.cart.reduce((s, c) => s + (c.price || 0), 0)
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("totalItems", state.totalItems)
            localStorage.setItem("total", state.total)
            toast.success("Item added successfully")
        },
        // remove items
        removeItem: (state, value) => {
            const id = value.payload
            state.cart = state.cart.filter((c) => c._id !== id && c.id !== id)
            state.totalItems = state.cart.length
            state.total = state.cart.reduce((s, c) => s + (c.price || 0), 0)
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("totalItems", state.totalItems)
            localStorage.setItem("total", state.total)
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