import { Box } from '@mui/system'
import { ProductDescriptionType } from '../../../../../types/types'
import style from "./style"
import { Typography, useMediaQuery } from '@mui/material'
const ProductSection = ({ nameUz, valueUz}: ProductDescriptionType) => {
    const classes = style()
    const query = useMediaQuery('@media(max-width: 650px)')

    return(
            <Box>
                <Box className={classes.singleProduct}>
                    <Typography className={classes.desc}>{nameUz}</Typography>
                    {query ? null : <Box className={classes.line}></Box>}
                    <Typography className={classes.code}>{valueUz}</Typography>
                    {query ? <Box className={classes.line}></Box> : null}
                </Box>
            </Box>
    )
}
export default ProductSection