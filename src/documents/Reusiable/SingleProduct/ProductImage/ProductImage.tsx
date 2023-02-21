import { Box } from '@mui/system'
import style from './style'
import { useState } from 'react';

const ProductImage = ({getImage}: any) => {
    const classes = style()

    const firstImage = getImage !== 'undefined' ? getImage.at(0) : null
    const [singleImage, setSingleImage] = useState(firstImage)
    const [active, setActive] = useState(singleImage?.id)

    const showIndividualImages = (myId: any) => {
        setActive(myId)
        const filtered = getImage.find(({id}: any) => id === myId)
        setSingleImage(filtered)
    }

    return (
        <Box className={classes.swiperWrapper}>
            <Box className={classes.mainImage}>
                    <img src={`https://nextstore.in/nextstore${singleImage?.photoUrl}`}
                         className={classes.mainImages}
                         alt='image'
                    />
            </Box>
            {getImage.map(({id, photoUrl}: any) =>
                <img key={id} src={`https://nextstore.in/nextstore${photoUrl}`}
                     className={active ? classes.activeImages : classes.images}
                     alt='image'
                     onClick={() => showIndividualImages(id)}
                />
            )}
        </Box>
    )
}
export default ProductImage