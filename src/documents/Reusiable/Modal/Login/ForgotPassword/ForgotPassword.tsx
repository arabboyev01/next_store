import {Box} from "@mui/system";
// @ts-ignore
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import {useMediaQuery} from "@mui/material";
import React, {useState} from "react";
import SendCode from "./SendCode";
import {LoginModalStyle} from "../login.style";
import ApproveCode from "./ApproveCode";

export type LoginType = {
    open?: boolean
    handleCloseForget?: (e: any) => void
}


const ForgotPasswprd: React.FC<LoginType> = ({open, handleCloseForget}) => {
    const query = useMediaQuery('@media(max-width: 600px)')
    const [login, setLogin] = useState(false);
    const onClick = () => setLogin(true)
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
                    {login ? <ApproveCode handleCloseForget={handleCloseForget}/> :
                        <SendCode handleCloseForget={handleCloseForget} onClick={onClick}/>
                    }
                </>
            </Rodal>
        </Box>
    )
}
export default ForgotPasswprd;
