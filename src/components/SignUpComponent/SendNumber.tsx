import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {Form} from "react-final-form";
import {CssTextField} from "../../documents/Reusiable/Modal/Login/CssTextField/CssTextField";
import {SIGN_UP_FORM_VALUES} from "../../documents/Reusiable/Modal/Login/config.login";
import SubmitButton from "../../documents/Reusiable/SubmitButton/SubmitButton";
import React from "react";
import Style from "./SignUp.style"
import * as Yup from "yup";
import {makeValidate} from "mui-rff";
import axios from "axios";
import {apiAddress} from "../../../config";
import {useDispatch} from "react-redux";
import {validateLogin} from "../../redux/CartSlice"
import {useRouter} from "next/router";

const schema = Yup.object().shape({
    confirm: Yup.string().required(`${SIGN_UP_FORM_VALUES.confirm.label} talab qilinadi.`),
});
const validate = makeValidate(schema);

export type Props = {
    username: string
}
const SendNumber: React.FC<Props> = ({username}) => {
    const classes = Style()
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const changeValidate = () => {
        // @ts-ignore
        dispatch(validateLogin(true))
        router.push('/')
    }
    const userName = username.slice(12)
    console.log(userName)
    const Confirm = (values: any) => {
        setLoading(true)
        axios.post(`${apiAddress}/user/verify`, {
            smsCode: values.confirm,
            username: userName
        }, {headers: {'Content-Type': 'application/json'}}).then((data) => {
            if (data?.data?.id_token) {
                localStorage.setItem('tokenKey', data?.data?.id_token)
            }
            changeValidate()
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        })
    }
    return (
        <Box>
            <Typography className={classes.title}>Raqamni kirgazing </Typography>
            <Box className={classes.contentWrapper}>
                <Form
                    onSubmit={Confirm}
                    validate={validate}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit} noValidate style={{width: '100%'}}>
                            <Box style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                                <Box className={classes.fieldContainer}>
                                    <CssTextField {...SIGN_UP_FORM_VALUES.confirm} placeholder='Raqamni tasdiqlang' type="text"/>
                                </Box>
                            </Box>
                            <Box className={classes.submit} style={{marginBottom: "20%"}}>
                                <SubmitButton loading={loading} buttonText='Kirish'/>
                            </Box>
                        </form>
                    )}
                />
            </Box>
        </Box>
    )
}
export default SendNumber;
