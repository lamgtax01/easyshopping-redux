// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
    total: 0
}

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        add(state, action){
            const updatedCartList = state.cartList.concat(action.payload);
            const total = state.total + action.payload.price;
            return {...state, total: total, cartList: updatedCartList};
            // state.cartList.push(action.payload); // Add item to cart
            // state.total += action.payload.price; 
        },
        remove(state, action){
            const updatedCartList = state.cartList.filter(item => item.id !== action.payload.id);
            const total = state.total - action.payload.price;
            return {...state, total: total, cartList: updatedCartList};
        }
    }
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
