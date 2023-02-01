import {apiAddress} from "../../config";
import {createAsyncThunk} from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk('cart/getAllCartData', async () => {
    const response = await fetch(`${apiAddress}/product`)
    return await response.json();
})
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
