import { Box } from '@mui/system'
import MainLoader from '../MainLoader/MainLoader'
import React from 'react'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import ObjectData from './ObjectCart'
import ArrayCart from './ArrayCart'

const Dumb = ({classes, mainData, handleSingleProduct, carousel, sendData, query, dispatch, setRender, render}: any) => (
    <Box className={carousel ? classes.carousel : classes.mainCartWrapper}>
        {mainData === undefined || mainData.length === 0 ?
            <Box className={carousel ? classes.carouselLoader : classes.loader}>
                <MainLoader/>
            </Box> :
            Array.isArray(mainData) ?
                (<ArrayCart
                    mainData={mainData}
                    classes={classes}
                    carousel={carousel}
                    handleSingleProduct={handleSingleProduct}
                    sendData={sendData}
                    query={query}
                    dispatch={dispatch}
                    PrimaryButton={PrimaryButton}
                    setRender={setRender}
                    render={render}
                />) :
                (<ObjectData
                    mainData={mainData}
                    classes={classes}
                    carousel={carousel}
                    handleSingleProduct={handleSingleProduct}
                    sendData={sendData}
                    query={query}
                    dispatch={dispatch}
                    PrimaryButton={PrimaryButton}
                />)
        }
    </Box>
)
export default Dumb;
