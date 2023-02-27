import { Box } from '@mui/system'
import { ProductDescriptionType } from '../../../../../types/types'
import style from "./style"
import { Typography, useMediaQuery } from '@mui/material'
const ProductSection = ({ nameEng, nameRu, nameUz, paramId, valueEn}: ProductDescriptionType) => {
    const classes = style()
    const query = useMediaQuery('@media(max-width: 650px)')

    return(
            <Box>
                <Typography className={classes.subTitle}>{nameEng}</Typography>
                <Box className={classes.singleProduct}>
                    <Typography className={classes.desc}>Ishlab Chiqaruvchi kodi</Typography>
                    {query ? null : <Box className={classes.line}></Box>}
                    <Typography className={classes.code}>{nameRu}</Typography>
                    {query ? <Box className={classes.line}></Box> : null}
                </Box>
                <Box className={classes.singleProduct}>
                    <Typography className={classes.desc}>Mahsulot kodi</Typography>
                    {query ? null : <Box className={classes.line}></Box>}
                    <Typography className={classes.code}>{nameUz}</Typography>
                    {query ? <Box className={classes.line}></Box> : null}
                </Box>
                <Box className={classes.singleProduct}>
                    <Typography className={classes.desc}>Ishlab Chiqaruvchi kodi</Typography>
                    {query ? null : <Box className={classes.line}></Box>}
                    <Typography className={classes.code}>{paramId}</Typography>
                    {query ? <Box className={classes.line}></Box> : null}
                </Box>
                <Box className={classes.singleProduct}>
                    <Typography className={classes.desc}>Ishlab Chiqaruvchi kodi</Typography>
                    {query ? null : <Box className={classes.line}></Box>}
                    <Typography className={classes.code}>{valueEn}</Typography>
                    {query ? <Box className={classes.line}></Box> : null}
                </Box>
            </Box>
    )
}
export default ProductSection