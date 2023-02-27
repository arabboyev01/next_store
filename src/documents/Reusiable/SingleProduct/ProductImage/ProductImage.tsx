import { Box } from '@mui/system'
import style from './style'
import { useCallback, useEffect, useState } from 'react';

const ProductImage = ({getImage, getFirstImage}: any) => {
    const classes = style()
    const [singleImage, setSingleImage] = useState(getFirstImage)
    const [active, setActive] = useState(getFirstImage?.id)
    const showIndividualImages = (myId: any) => {
        setActive(myId)
        const filtered = getImage.find(({id}: any) => id === active)
        setSingleImage(filtered)
    }
    return (
        <Box className={classes.swiperWrapper}>
            <Box className={classes.mainImage}>
                <img src={`https://nextstore.in/nextstore${singleImage === undefined ? getFirstImage?.photoUrl : singleImage?.photoUrl}`}
                     className={classes.mainImages}
                     alt="image"
                />
            </Box>
            <Box className={classes.tinyImages}>
                {getImage.map(({id, photoUrl}: any) =>
                    <img key={id} src={`https://nextstore.in/nextstore${photoUrl}`}
                         className={active ? classes.activeImages : classes.images}
                         alt="image"
                         onClick={() => showIndividualImages(id)}
                    />
                )}
            </Box>
        </Box>
    )
}
export default ProductImage