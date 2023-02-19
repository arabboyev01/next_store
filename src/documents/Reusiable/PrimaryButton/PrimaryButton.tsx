import Styles from "./primary.style";
import {Button} from "@mui/material";
import React from "react";
import {PrimaryButton} from "../../../../types/types";

const PrimaryButton: React.FC<PrimaryButton> = ({text, onClick, disable}) => {
    const classes = Styles();
    return(
        <Button className={classes.button} onClick={onClick} disabled={disable} type='submit'>{text}</Button>
    )
}
export default PrimaryButton;
