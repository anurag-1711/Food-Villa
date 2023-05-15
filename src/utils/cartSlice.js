import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const { id } = action.payload;
            
            const index = state.items.findIndex((item) => {
                return item.id === id;
            });

            const newItems = [...state.items];
            newItems.splice(index, 1);

            state.items = newItems;
        },
        clearCart: (state) => {
            state.items = []
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;