import * as actionTypes from "./shoppingTypes";
let INITIAL_STATE = {
    products: [],
    cart: [],
    currentItem: 0,
}

const shopReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // Great Item data from products array
            const item = state.products.find(
                (product: any) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item: any) =>
                item.id === action.payload.id
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item: any) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )// @ts-ignore
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item: any) => item.id !== action.payload.id),
            };
        case 'Add_to_products':
            state.products = action.payload
            return {...state}
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item: any) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;
