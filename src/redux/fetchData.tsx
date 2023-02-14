import { apiAddress } from '../../config';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
    mainData: [],
    cartState: false,
    cartItems: [],
    singleProduct: [],
    searchValue: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
    inputName: '',
    validate: false,
}
const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
const config = {headers: {Authorization: `Bearer ${token}`}};

export const fetchData = createAsyncThunk('cart/getAllCartData', async () => {
    const response = await fetch(`${apiAddress}/product`, config)
    return await response.json();
})


