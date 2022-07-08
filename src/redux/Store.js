import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './Features/CustomerSlice'

const store = configureStore({
  reducer: {
    customer: customerReducer
  }
})

export default store;