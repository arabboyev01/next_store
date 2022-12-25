import {Box} from "@mui/system";
import Styles from "./singleproduct.style"
import { connect } from "react-redux";
import React from "react";
import {mapStateToProps, mapDispatchToProps} from "./products.dispatch"
import {SingleProductType} from "../../../../types/types";

const SingleProduct: React.FC<SingleProductType> = ({ current, addToCart, cart }) => {
    const classes = Styles()
    console.log(current)
    return(
        <Box className={classes.singleProducts}>
            <Box className={classes.productHeader}>

            </Box>
        </Box>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
