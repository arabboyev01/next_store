import { Box } from '@mui/system'
import style from './style'
import { useState } from 'react';
import MainLoader from '../../MainLoader/MainLoader'
// @ts-ignore
import { Magnifier } from "react-image-magnifiers";
const ProductImage = ({getImage, getFirstImage}: any) => {
    const classes = style()
    const [singleImage, setSingleImage] = useState<any>(null)
    const [active, setActive] = useState(getFirstImage?.id)
    const showIndividualImages = (myId: any) => {
        setActive(myId)
        const filtered = getImage?.find(({id}: any) => id == myId)
        setSingleImage(filtered)
    }

    return (
        <Box className={classes.swiperWrapper}>
            {getImage === null || getFirstImage === undefined ?
                <Box style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: '100%'}}>
                    <MainLoader/>
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