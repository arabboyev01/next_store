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
               {data?.params?.map(({id, nameEng, nameRu, nameUz, paramId, valueEn}: ProductDescriptionType) => (
                    <ProductSection key={id} nameEng={nameEng} nameRu={nameRu} nameUz={nameUz}
                                    paramId={paramId} valueEn={valueEn}
                    />
               ))}
            </Box>
        </Box>
    )
}
export default Dumb