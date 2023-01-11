import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {MainProducts} from "../documents/DumbData/DumbData";
const initialState = {
    cartState: false,
    // cartItems: window.localStorage.getItem("cart")
    //     // @ts-ignore
    //     ? JSON.parse(localStorage.getItem("cart")) : [], // Let Suppose Database
    cartItems: [], // Let Suppose Database
    singleProduct: [],
    searchValue: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
    inputName: '',
};

const CartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        setAddItemToCart: (state: any, action: any) => {
            const itemIndex = state.cartItems.findIndex((item: any) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                state.cartTotalQuantity += 1
                toast.success(`Savatga qo'shildi`);
            } else {
                const temp = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(temp);
                state.cartTotalQuantity += 1

                toast.success(`${action.payload.title} Savatga qo'shildi`);
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setSearchValue: (state: any, action: any) => {
            const loweredValue = action.payload.toLowerCase();
            if(action.payload){
                const searchValue = MainProducts.filter(({title}) => title.toLowerCase().includes(loweredValue))
                state.searchValue.push(searchValue);

                state.inputName = action.payload;
            }
            return undefined;
        },

        setRemoveItemFromCart: (state: any, action: any) => {
            state.cartItems = state.cartItems.filter(({id}: any) => id !== action.payload.id);
            console.log(state.cartTotalQuantity)
            if(state.cartTotalQuantity == 1){
                state.cartTotalQuantity = 0;
            }else{
                state.cartItems.cartQuantity -= 1;
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            toast.success(`${action.payload.title} savatchadan o'chirib tashlandi.`);
        },
        setSingleProduct: (state: any, action: any) => {
            const filter = {...action.payload}
            state.singleProduct.push(filter);
        },
        setIncreaseItemQTY: (state: any, action: any) => {
            const itemIndex = state.cartItems.findIndex((item: any) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`Mahsulot soni qo'shildi.`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setDecreaseItemQTY: (state:any, action: any) => {
            const itemIndex = state.cartItems.findIndex(
                (item: any) => item.id === action.payload.id
            );
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.success(`Mahsulot soni ayrildi`);
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setGetTotals: (state: any) => {
            let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal: any, cartItem:any)=> {
                const { price, cartQuantity } = cartItem;
                const totalPrice = price * cartQuantity;

                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQTY += cartQuantity;

                return cartTotal;
            }, {
                totalAmount: 0,
                totalQTY: 0,
            });

            state.cartTotalAmount = totalAmount;
            state.cartTotalQuantity = totalQTY;
        },
    },
});

export const {
    setAddItemToCart,
    setRemoveItemFromCart,
    setIncreaseItemQTY,
    setDecreaseItemQTY,
    setGetTotals,
    setSingleProduct,
    setSearchValue
} = CartSlice.actions;

export const selectSingleItem = (state: any) => state.cart.singleProduct;
export const selectCartItems = (state: any) => state.cart.cartItems;

export const selectTotalAmount = (state: any) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state: any) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
