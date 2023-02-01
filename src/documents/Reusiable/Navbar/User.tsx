import {Box} from "@mui/system";
import Image from "next/image";
import user_image from "../../../../public/assets/images/user.png"
import {useRouter} from "next/router";
const User = () => {
    const router = useRouter();
    const sendData = () => {
        router.push({pathname: "/profile"})
    }
    return(
        <Box onClick={sendData}>
            <Image src={user_image.src} alt='user image' width={40} height={40} style={{marginTop: "5px", cursor: 'pointer'}} />
        </Box>
    )
}

export default User;
