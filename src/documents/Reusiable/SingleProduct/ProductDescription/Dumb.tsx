import { Box } from '@mui/system'
import style from './style'
import { Typography } from '@mui/material'
import { ProductDescriptionType } from '../../../../../types/types'
import ProductSection from './ProductSection'

const Dumb = ({data}: any) => {
    const classes = style()
    return (
        <Box className={classes.mainWrapper}>
            <Typography className={classes.title}>Mahsulot xususiyatlari</Typography>
            <Box className={classes.mainProductWrapper}>
               {data?.params?.map(({id, nameEn, nameRu, nameUz, valueEn, valueUz, valueRu}: ProductDescriptionType) => (
                    <ProductSection key={id} nameEn={nameEn} nameRu={nameRu} nameUz={nameUz}
                                    valueEn={valueEn} valueUz={valueUz} valueRu={valueRu}
                    />
               ))}
            </Box>
        </Box>
    )
}
export default Dumb