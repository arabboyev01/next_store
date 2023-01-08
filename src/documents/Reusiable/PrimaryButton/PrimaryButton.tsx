import Styles from "./primary.style";
import {Button} from "@mui/material";
import React from "react";
import {PrimaryButton} from "../../../../types/types";

const PrimaryButton: React.FC<PrimaryButton> = ({text, onClick}) => {
    const classes = Styles();
    return(
        <Button className={classes.button} onClick={onClick}>{text}</Button>
    )
}
export default PrimaryButton;
