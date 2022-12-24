import {Typography} from "@mui/material";
import Style from "./mainTitle.style"
import React from "react";

export type MainTitleType = {
    title?: string
}
const MainTitle: React.FC<MainTitleType> = ({title}) => {
    const classes = Style()
    return(
        <Typography className={classes.mainTitle}>{title}</Typography>
    )
}
export default MainTitle;
