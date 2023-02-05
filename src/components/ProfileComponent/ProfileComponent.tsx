import style from "./profile.style"
import { Box } from '@mui/system'
import ProfileSidebar from './ProfileSidebar'
import ProfileLikes from '../ProfileComponent/ProfileDescriptions/ProfileLikes'

const ProfileComponent = () => {
    const classes = style()
    return(
        <Box className={classes.mainWrapper}>
            <Box className={classes.sideBar}>
                <ProfileSidebar />
            </Box>
            <Box className={classes.content}>
                <ProfileLikes />
            </Box>
        </Box>
    )
}
export default ProfileComponent