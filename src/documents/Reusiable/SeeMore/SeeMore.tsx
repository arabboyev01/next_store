import Style from "./seeMore.style"
import {Button} from "@mui/material";
import React from "react";
import { useRouter } from 'next/router'

export type SeeMoreType = {
    text?: string
}
const SeeMoreButton: React.FC<SeeMoreType> = ({text}) => {
    const classes = Style()
    const router = useRouter()
    const pushQuery = () => {
        router.push({pathname: '/category'})
    }
    return(
        <Button className={classes.button} onClick={pushQuery}>{text}</Button>
    )
}
export default SeeMoreButton;
