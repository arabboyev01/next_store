import {Box} from "@mui/system";
// @ts-ignore
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import {useMediaQuery} from "@mui/material";
import React, {useState} from "react";
import SendCode from "./SendCode";
import {LoginModalStyle} from "../login.style";
import ApproveCode from "./ApproveCode";
import { ChangeNewPassword, SendSmsCode } from './Dispatch'
import { useRouter } from 'next/router'

export type LoginType = {
    open?: boolean
    handleCloseForget?: (e: any) => void
}


const ForgotPasswprd: React.FC<LoginType> = ({open, handleCloseForget}) => {
    const query = useMediaQuery('@media(max-width: 600px)')
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [refresh, setRefresh] = useState(false)
    const [directPage, setDirectPage] = useState(false)
    const router = useRouter()

    const sendSms = (values: any) => {
        setLoading(true)
        setEmail(values.number)
        SendSmsCode(values, setLoading, setLogin)
    }

    const changePassword = (values: any) => {
        setRefresh(true)
        ChangeNewPassword(values, email, setRefresh, setDirectPage)
        directPage && router.push({pathname: "/"})
    }

    return(
        <Box>
            <Rodal
                customStyles={LoginModalStyle}
                animation="slideDown"
                closeOnEsc={true}
                showCloseButton={false}
                visible={open}
                onClose={handleCloseForget}
                width={query ? 350 : 466}
                height={425}

            >
                <>
                    {login ? <ApproveCode handleCloseForget={handleCloseForget} changePassword={changePassword}
                        refresh={refresh}
                        /> :
                        <SendCode handleCloseForget={handleCloseForget} sendSms={sendSms} loading={loading}/>
                    }
                </>
            </Rodal>
        </Box>
    )
}
export default ForgotPasswprd;
