import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
  },
});
