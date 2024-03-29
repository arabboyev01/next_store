import { Box } from '@mui/system';
import Styles from './secondarycart.style'
import React from 'react';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

export type SecondaryCartType = {
    data?: any,
}
const SecondaryCart: React.FC<SecondaryCartType> = ({data}) => {
    const classes = Styles();
    const router = useRouter();
    const HandleDataById = (item: any) => {
        router.push({pathname: '/category', query: {id: item}})
    }

    return (
        <Box className={classes.secondaryCartWrapper}>
            {data.map((item: any) =>
                <Box onClick={() => HandleDataById(item.id)} key={item.id}>
                    <Box className={classes.secondaryCart}>
                        <img src={`https://nextstore.in/nextstore${item.imageUrl}`}
                             loading="lazy" alt="image" className={classes.itemImage}/>
                        <Typography className={classes.text}>{item.name}</Typography>
                    </Box>
                </Box>
            )}
        </Box>
    )
}
export default SecondaryCart;
