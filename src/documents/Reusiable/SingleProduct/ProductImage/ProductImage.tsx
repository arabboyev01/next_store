import { Box } from '@mui/system'
import style from './style'
import { useState } from 'react';
import CircleLoader from '../../MainLoader/CircleLoader'
// @ts-ignore
import { Magnifier } from "react-image-magnifiers";
import { useMediaQuery } from '@mui/material'
const ProductImage = ({getImage, getFirstImage}: any) => {
    const classes = style()
    const [singleImage, setSingleImage] = useState<any>(null)
    const [active, setActive] = useState(getFirstImage?.id)
    const query = useMediaQuery('@media(max-width: 650px)')
    const showIndividualImages = (myId: any) => {
        setActive(myId)
        const filtered = getImage?.find(({id}: any) => id == myId)
        setSingleImage(filtered)
    }

    return (
        <Box className={classes.swiperWrapper}>
            {getImage === null || getFirstImage === undefined ?
                <Box style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: '100%',
                    marginTop: `${query ?  '0' : '200px'}`}}>
                    <CircleLoader/>
                </Box> :
                <Box className={classes.mainImage}>
                    <Magnifier
                        imageSrc={`https://nextstore.in/nextstore${singleImage === null ? getFirstImage?.photoUrl : singleImage?.photoUrl}`}
                        className={classes.mainImages}
                        alt="image"
                    />
                </Box>
            }
            <Box className={classes.tinyImages}>
                {getImage.map(({id, photoUrl}: any) =>
                    <img key={id} src={`https://nextstore.in/nextstore${photoUrl}`}
                         className={active == id ? classes.activeImages : classes.images}
                         alt="image"
                         onClick={() => showIndividualImages(id)}
                    />
                )}
            </Box>
        </Box>
    )
}
export default ProductImage