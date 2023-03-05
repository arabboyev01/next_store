import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { fetchData } from './fetchData';
import { initialState } from './fetchData';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const CartSlice = createSlice({
    initialState,
    name: 'cart',
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state: any, action: any) => {
            state.mainData.push(action.payload)
        });
    },
    reducers: {
        setAddItemToCart: (state: any, action: any) => {
            const itemIndex = state.cartItems.findIndex((item: any) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                state.cartTotalQuantity += 1
                toast.success(`Savatga qo'shildi`);
            } else {
                const temp = {...action.payload, cartQuantity: 1}
                state.cartItems.push(temp);
                state.cartTotalQuantity += 1

                toast.success(`${action.payload.name} Savatga qo'shildi`);
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },

        setSearchValue: (state: any, action: any) => {
            const loweredValue = action.payload.toLowerCase();
            if (state.mainData !== 'undefined') {
                const searchValue = state.mainData[0]?.content.filter(({name}: any) => name.toLowerCase().includes(loweredValue))
                state.searchValue.push(searchValue);

                state.inputName = action.payload;
            }

            return undefined;
        },
        validateLogin: (state: any, action: any) => {
            state.validate = action.payload
        },
        likedID: (state: any, action: any | number) => {
            state.likes = action.payload

            toast("Iltimos hisobingizga kiring", {
                duration: 5000,
                icon: <AssignmentIndIcon />,
                style: {
                    color: "darkorange",
                },
            })
        },
        setRemoveItemFromCart: (state: any, action: any) => {
            state.cartItems = state.cartItems.filter(({id}: any) => id !== action.payload.id);
            if (state.cartTotalQuantity == 1) {
                state.cartTotalQuantity = 0;
            } else {
                state.cartItems.cartQuantity -= 1;
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
            toast.success(`${action.payload.name} savatchadan o'chirib tashlandi.`);
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
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        setDecreaseItemQTY: (state: any, action: any) => {
            const itemIndex = state.cartItems.findIndex(
                (item: any) => item.id === action.payload.id
            );
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.success(`Mahsulot soni ayrildi`);
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        setGetTotals: (state: any) => {
            let {totalAmount, totalQTY} = state.cartItems.reduce((cartTotal: any, cartItem: any) => {
                const {price, cartQuantity} = cartItem;
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
    setSearchValue,
    validateLogin,
    likedID
} = CartSlice.actions;
export const selectSingleItem = (state: any) => state.cart.singleProduct;
export const selectCartItems = (state: any) => state.cart.cartItems;

export const selectTotalAmount = (state: any) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state: any) => state.cart.cartTotalQuantity;
export const likedId = (state: any) => state.cart.likes
export const validataionCode = (state: any) => state.cart.validate

export default CartSlice.reducer;
