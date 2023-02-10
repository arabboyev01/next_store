import style from './profile.style'
import { Box } from '@mui/system'
import ProfileSidebar from './ProfileSidebar'
import ProfileLikes from '../ProfileComponent/ProfileDescriptions/ProfileLikes'
import ProfileOrders from '../ProfileComponent/ProfileOrders'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProfileComponent = () => {
    const classes = style()
    const [profileItem, setProfileItem] = useState(null);
    const [isActive, setIsActive] = useState<null | number>(null)
    const router = useRouter();

    const handlePage = (category: any) => {
        setIsActive(category)
        if (category === 'likes') {
            // @ts-ignore
            setProfileItem(<ProfileLikes/>)
        }
        if (category === 'order') {
            // @ts-ignore
            setProfileItem(<ProfileOrders/>)
        }

        if (category === 'logout') {
            localStorage.removeItem('tokenKey')
            router.push({pathname: '/'})

            setTimeout(() => router.reload(), 200)
        }
    }
    const [stickySide, setNavState] = useState(false);

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