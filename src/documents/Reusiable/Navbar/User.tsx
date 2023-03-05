import {Box} from "@mui/system";
import Image from "next/image";
import user_image from "../../../../public/assets/images/user.png"
import {useRouter} from "next/router";
import jwt_decode from 'jwt-decode'
import { Typography, useMediaQuery } from '@mui/material'

const User = () => {
    const router = useRouter();
    const sendData = () => {
        router.push({pathname: "/profile"})
    }
    const token: any | unknown = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
    const decoded: unknown  | any = jwt_decode(token)
    const query = useMediaQuery('@media(max-width: 650px)')

    return(
        <Box onClick={sendData} style={{display: "flex", alignItems: "center"}}>
            <Image src={user_image.src} alt='user image' width={40} height={40} style={{marginTop: "5px", cursor: 'pointer'}} />
            {query ? <Typography style={{fontSize: "15px", fontWeight: 500, marginLeft: "10px",}}>
                {decoded.fullName}
            </Typography> :
                null
            }
        </Box>
    )
}

export default User;
