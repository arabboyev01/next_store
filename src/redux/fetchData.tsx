import { apiAddress } from '../../config';
import { createAsyncThunk } from '@reduxjs/toolkit';

const storedData: any = typeof window !== 'undefined' ? window.localStorage.getItem('CartItems') : null;
const parsedData = JSON.parse(storedData)
console.log(parsedData)

export const initialState = {
    mainData: [],
    cartState: false,
    cartItems: parsedData === null ? [] : parsedData,
    singleProduct: [],
    searchValue: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
    inputName: '',
    validate: false,
    categoryId: 0,
    likes: false,
}
const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
const config = {headers: {Authorization: `Bearer ${token}`}};

export const fetchData = createAsyncThunk('cart/getAllCartData', async () => {
    const response = await fetch(`${apiAddress}/product`, config)
    return await response.json();
})
