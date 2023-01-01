import Styles from "./primary.style";
import {Button} from "@mui/material";
import React from "react";

export type PrimaryButton = {
    text?: string
    onClick?: (e: any) => void
}
const PrimaryButton: React.FC<PrimaryButton> = ({text, onClick}) => {
    const classes = Styles();
    return(
        <Button className={classes.button} onClick={onClick}>{text}</Button>
    )
}
export default PrimaryButton;
