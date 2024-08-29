import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "@/utils/cartUtills";

const initialState = {
  cartItems: [],
  shippingAddress: {},
  paymentMethod: "PayPal",
  totalPrice: 0,
};

if (typeof localStorage !== "undefined") {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    try {
      const parsedCart = JSON.parse(storedCart);
      initialState.cartItems = parsedCart.cartItems || [];
      initialState.shippingAddress = parsedCart.shippingAddress || {};
      initialState.paymentMethod = parsedCart.paymentMethod || "PayPal";
      initialState.totalPrice = parsedCart.totalPrice;
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      // Handle the error if needed
    }
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        existItem.quantity = existItem.quantity + 1;
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? existItem : x
        );
      } else {
        item.quantity = 1;
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    decreaseItemQty: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex((x) => x._id === itemId);

      if (itemIndex !== -1) {
        const currentItem = state.cartItems[itemIndex];

        if (currentItem.quantity > 1) {
          currentItem.quantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
      }

      return updateCart(state);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      return updateCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
  decreaseItemQty,
} = cartSlice.actions;

export default cartSlice.reducer;
