import { Box } from '@mui/system';
// @ts-ignore
import Rodal from 'rodal';
import { Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import 'rodal/lib/rodal.css';
import Style, { LoginModalStyle } from './catalog.style'
import { CATALOG_DATA } from '../../DumbData/DumbData'

const Catalog = ({catalogOpen, handleCatalogClose}: any) => {
    const query = useMediaQuery('@media(max-width: 600px)')
    const classes = Style()
    return (
        <Rodal
            customStyles={LoginModalStyle}
            animation="slideDown"
            closeOnEsc={true}
            showCloseButton={false}
            visible={catalogOpen}
            onClose={handleCatalogClose}

        >
            <Box className={classes.mainWrapper}>
                <Box className={classes.mainSection}>
                    {CATALOG_DATA.map(({id, name}: { id: number, name: string }) =>
                        <Typography className={classes.title} key={id}>{name}</Typography>
                    )}
                </Box>
                <Box className={classes.descSection}></Box>
            </Box>
        </Rodal>
    )
}
export default Catalog;
