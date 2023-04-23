import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice, 
    }
});

export default store;


/***
 * 
 * Create Store
 *      - configureStore() -- RTK
 * 
 * Provide my store to app
 *      - <Provider store = {store}> -- react-redux
 * 
 * Create Slice
 *      -- RTK - createSlice({
 *                  name: "",
 *                  initialState: "",
 *                  reducers: {
 *                      action: reducer function,
 *                      addItem: (state, action) => {
 *                          state = action.payload
 *                      }
 *                  } 
 *               }) 
 * 
 *          export const { addItem, removeItem } = cartSlice.actions;
 *          export default cartSlice.reducer;
 * 
 * Put that slice into store
 *          - {
 *              reducer: {
 *                  cart: cartSlice,
 *                  user: userSlice
 *              }   
 *            }
 * 
 * 
 * 
 * 
 */