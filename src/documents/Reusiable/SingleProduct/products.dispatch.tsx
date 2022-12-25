import {addToCart} from "../../../redux/shop/shoppingAction";

export const mapStateToProps = (state:any) => {
    return {
        current: state.shop.currentItem,
    };
};
export const mapDispatchToProps = (dispatch: any) => {
    return {
        addToCart: (id: number) => dispatch(addToCart(id)),
    };
};
