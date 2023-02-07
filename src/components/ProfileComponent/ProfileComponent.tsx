import style from "./profile.style"
import { Box } from '@mui/system'
import ProfileSidebar from './ProfileSidebar'
import ProfileLikes from '../ProfileComponent/ProfileDescriptions/ProfileLikes'
import ProfileOrders from '../ProfileComponent/ProfileOrders'
import {useState} from "react"
const ProfileComponent = () => {
    const classes = style()
    const [profileItem, setProfileItem] = useState(null);
    const handlePage = (category: any) => {
        if(category === 'likes'){
             // @ts-ignore
            setProfileItem(<ProfileLikes />)
        }
        if (category === 'order') {
            // @ts-ignore
             setProfileItem(<ProfileOrders />)
        }
    }
    return(
        <Box className={classes.mainWrapper}>
            <Box className={classes.sideBar}>
                <ProfileSidebar handlePage={handlePage}/>
            </Box>
            <Box className={classes.content}>
                {profileItem}
            </Box>
        </Box>
    )
}
export default ProfileComponent;