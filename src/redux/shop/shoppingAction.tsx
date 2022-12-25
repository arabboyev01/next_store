import * as actionTypes from "./shoppingTypes";

export const addToCart = (itemID: any,) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        },
    };
};

export const removeFromCart = (itemID: any) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    };
};

export const adjustItemQty = (itemID: any, qty: any) => {
    return {
        type: actionTypes.ADJUST_ITEM_QTY,
        payload: {
            id: itemID,
            qty,
        },
    };
};

export const loadCurrentItem = (item: any) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
};
