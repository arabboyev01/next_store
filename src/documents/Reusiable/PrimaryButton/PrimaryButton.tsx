import Styles from "./primary.style";
import {Button} from "@mui/material";
import React from "react";

export type PrimaryButton = {
    text?: string
}
const PrimaryButton: React.FC<PrimaryButton> = ({text}) => {
    const classes = Styles();
    return(
        <Button className={classes.button}>{text}</Button>
    )
}
export default PrimaryButton;
