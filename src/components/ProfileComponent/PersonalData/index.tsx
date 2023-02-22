import Dumb from './Dumb'
import style from './main.style'
import { ResendSmsCode, uploadNewPersonalData } from './DispatchData'
import { useState } from "react"
const PersonalData = () => {
    const classes = style();
    const [countDown, setCountDown] = useState(false);
    const [success, setSuccess] = useState(false);
    const resendSms = () => {
       return ResendSmsCode(setCountDown)
    }

    const refreshPersonalData = (values: any) => {
        uploadNewPersonalData(values, setSuccess)
    }
    return (
        <Dumb
            classes={classes}
            uploadNewPersonalData={refreshPersonalData}
            ResendSmsCode={resendSms}
            countDown={countDown}
            success={success}
        />
    )
}

export default PersonalData