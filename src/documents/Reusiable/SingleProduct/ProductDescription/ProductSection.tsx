import { Box } from '@mui/system'
import { ProductDescriptionType } from '../../../../../types/types'
import style from "./style"
import { Typography, useMediaQuery } from '@mui/material'
const ProductSection = ({ title, companyCode, productCode, saleCode, companyCode1}: ProductDescriptionType) => {
    const classes = style()
    const query = useMediaQuery('@media(max-width: 650px)')

    return(
            <Box>
                <Typography className={classes.subTitle}>{title}</Typography>
                <Box className={classes.singleProduct}>
                    <Typography className={classes.desc}>Ishlab Chiqaruvchi kodi</Typography>
                    {query ? null : <Box className={classes.line}></Box>}
                    <Typography className={classes.code}>{companyCode}</Typography>
                    {query ? <Box className={classes.line}></Box> : null}
                </Box>
                <Box className={classes.singleProduct}>
                    <Typography className={classes.desc}>Mahsulot kodi</Typography>
                    {query ? null : <Box className={classes.line}></Box>}
                    <Typography className={classes.code}>{productCode}</Typography>
                    {query ? <Box className={classes.line}></Box> : null}
                </Box>
                <Box className={classes.singleProduct}>
                    <Typography className={classes.desc}>Ishlab Chiqaruvchi kodi</Typography>
                    {query ? null : <Box className={classes.line}></Box>}
                    <Typography className={classes.code}>{saleCode}</Typography>
                    {query ? <Box className={classes.line}></Box> : null}
                </Box>
                <Box className={classes.singleProduct}>
                    <Typography className={classes.desc}>Ishlab Chiqaruvchi kodi</Typography>
                    {query ? null : <Box className={classes.line}></Box>}
                    <Typography className={classes.code}>{companyCode1}</Typography>
                    {query ? <Box className={classes.line}></Box> : null}
                </Box>
            </Box>
    )
}
export default ProductSection