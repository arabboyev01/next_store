import style from './profile.style'
import { Box } from '@mui/system'
import ProfileSidebar from './ProfileSidebar'
import ProfileLikes from '../ProfileComponent/ProfileDescriptions/ProfileLikes'
import ProfileOrders from '../ProfileComponent/ProfileOrders'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PersonalData from './PersonalData'

const ProfileComponent = () => {
    const classes = style()
    const [profileItem, setProfileItem] = useState(<PersonalData/>);
    const [isActive, setIsActive] = useState<null | number>(null)
    const [stickySide, setNavState] = useState(false);
    const router = useRouter();

    const handlePage = (category: any) => {
        setIsActive(category)
        if (category === 'likes') {
            setProfileItem(<ProfileLikes/>)
        }
        if (category === 'order') {
            setProfileItem(<ProfileOrders/>)
        }

        if (category === null) {
            setProfileItem(<PersonalData/>)
        }

        if (category === 'logout') {
            localStorage.removeItem('tokenKey')
            router.push({pathname: '/'})

            setTimeout(() => router.reload(), 200)
        }
    }

    const onNavScroll = useCallback(() => {
        window.scrollY > 75 ? setNavState(true) : setNavState(false);
    }, [setNavState])

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll)
        return () => window.removeEventListener('scroll', onNavScroll)
    }, [onNavScroll])

    return (
        <Box className={classes.mainWrapper}>
            <Box className={stickySide ? classes.stickyMain : classes.sideBar}>
                <ProfileSidebar handlePage={handlePage} isActive={isActive}/>
            </Box>
            <Box className={classes.content}>
                {profileItem}
            </Box>
        </Box>
    )
}
export default ProfileComponent;