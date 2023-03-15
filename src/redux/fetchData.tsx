import { apiAddress } from '../../config';
import { createAsyncThunk } from '@reduxjs/toolkit';

const storedData: any = typeof window !== 'undefined' ? window.localStorage.getItem('CartItems') : null;
export const parsedData = storedData !== null ? JSON.parse(storedData) : [{name: 'initialData'}]

export const initialState = {
    mainData: [],
    cartState: false,
    cartItems: parsedData,
    singleProduct: [],
    searchValue: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
    inputName: '',
    validate: false,
    categoryId: 0,
    likes: false,
}
console.log(initialState)

const token = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
const config = {headers: {Authorization: `Bearer ${token}`}};

export const fetchData = createAsyncThunk('cart/getAllCartData', async () => {
    const response = await fetch(`${apiAddress}/product`, config)
    return await response.json();
})
