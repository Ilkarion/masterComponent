'use client';

import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers/RegistrationSlice';
import mobileFilter from './reducers/MobileFilterSlice'
import LikedCardsReducer from './reducers/LikedCardsSlice';
import amountComments from './reducers/amountComments';
import Basket from './reducers/BasketSlice';
export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    pushItem: LikedCardsReducer,
    amount: amountComments,
    basket: Basket,
    mobileFilter: mobileFilter,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
