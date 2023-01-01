import {Button} from "@mui/material";
import React from "react";
import Loading from "./Loading"
import Style from "./submitButton.style"

export type SubmitButtonType = {
    loading?: boolean
    buttonText?: string
}

const SubmitButton: React.FC<SubmitButtonType> = ({loading, buttonText}) => {
    const classes = Style()
    return (
        <Button variant="contained" className={classes.submitButton} type='submit' disabled={loading}>
            {loading ? <Loading/> : buttonText}
        </Button>
    )
}
export default SubmitButton;
