import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { RestaurantCardItem } from '../types/interface';

interface RestaurantState {
  restaurant: RestaurantCardItem | null;
}

const initialState: RestaurantState = {
  restaurant: null,
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<RestaurantCardItem>) => {
      state.restaurant = action.payload;
    },
  },
})

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) => state.restaurant.restaurant;

export default restaurantSlice.reducer;