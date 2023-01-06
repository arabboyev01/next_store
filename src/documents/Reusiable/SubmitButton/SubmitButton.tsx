import {Button} from "@mui/material";
import React from "react";
import Loading from "./Loading"
import Style from "./submitButton.style"

export type SubmitButtonType = {
    loading: boolean
    buttonText: string
    onClick?: any
}

const SubmitButton: React.FC<SubmitButtonType> = ({loading, buttonText, onClick}) => {
    const classes = Style()
    return (
        <Button variant="contained" className={classes.submitButton} type='submit' disabled={loading} onClick={onClick}>
            {loading ? <Loading/> : buttonText}
        </Button>
    )
}
export default SubmitButton;
