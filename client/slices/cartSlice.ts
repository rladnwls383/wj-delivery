import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { DishItem } from '../types/interface';

interface CartState {
  items: DishItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<DishItem>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.log("Can't remove the item that is not in the cart!");
      }
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state: RootState): DishItem[] => state.cart.items;

export const selectCartItemsById = (state: RootState, id: number): DishItem[] =>
  state.cart.items.filter(item => item.id === id);

export const selectCartTotal = (state: RootState): number =>
  state.cart.items.reduce((total, item) => total + (item.price || 0), 0);

export default cartSlice.reducer;