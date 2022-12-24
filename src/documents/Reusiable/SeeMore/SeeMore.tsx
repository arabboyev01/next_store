import Style from "./seeMore.style"
import {Button} from "@mui/material";
import React from "react";

export type SeeMoreType = {
    text?: string
}
const SeeMoreButton: React.FC<SeeMoreType> = ({text}) => {
    const classes = Style()
    return(
        <Button className={classes.button}>{text}</Button>
    )
}
export default SeeMoreButton;
