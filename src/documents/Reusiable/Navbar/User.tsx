import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode'
import { Typography, useMediaQuery } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { randomColor } from '../../../components/ProfileComponent/RandomColor'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiAddress } from '../../../../config'

const User = () => {
    const router = useRouter();
    const sendData = () => {
        router.push({pathname: '/profile'})
    }
    const token: any | unknown = typeof window !== 'undefined' ? window.localStorage.getItem('tokenKey') : null;
    const decoded: unknown | any = jwt_decode(token)
    const query = useMediaQuery('@media(max-width: 650px)')

    const [firstName, setFirstName] = useState<any>(null)
    const [lastName, setLastName] = useState<any>(null)
    useEffect(() => {
        axios.get(`${apiAddress}/user/${decoded.sub}`)
            .then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
            }).catch(err => console.log(err))
    }, [decoded])

    return (
        <Box onClick={sendData} style={{display: 'flex', alignItems: 'center'}}>
            <Stack direction="row" spacing={2}>
                <Avatar sx={{bgcolor: randomColor}}>
                    <Typography style={{fontSize: '15px'}}>{firstName?.charAt(0)}{lastName?.charAt(0)}</Typography>
                </Avatar>
            </Stack>
            {query ? <Typography style={{fontSize: '15px', fontWeight: 500, marginLeft: '10px',}}>
                    {firstName} {lastName}
                </Typography> :
                null
            }
        </Box>
    )
}

export default User;
