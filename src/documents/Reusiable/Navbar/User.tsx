import {Box} from "@mui/system";
import Image from "next/image";
import user_image from "../../../../public/assets/images/user.png"
const User = () => {
    return(
        <Box>
            <Image src={user_image.src} alt='user image' width={40} height={40} style={{marginTop: "5px"}} />
        </Box>
    )
}

export default User
