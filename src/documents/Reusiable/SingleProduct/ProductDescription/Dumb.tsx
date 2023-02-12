import { Box } from '@mui/system'
import style from './style'
import { Typography } from '@mui/material'
import { ProductDescriptionType } from '../../../../../types/types'
import { PRODUCT_DESCRIPTION } from '../../../DumbData/DumbData'
import ProductSection from './ProductSection'

const Dumb = () => {
    const classes = style()
    return (
        <Box className={classes.mainWrapper}>
            <Typography className={classes.title}>Mahsulot xususiyatlari</Typography>
            <Box className={classes.mainProductWrapper}>
               {PRODUCT_DESCRIPTION.map(({id, title, companyCode, productCode, saleCode, companyCode1}: ProductDescriptionType) => (
                    <ProductSection key={id} title={title} companyCode={companyCode} productCode={productCode}
                                    saleCode={saleCode} companyCode1={companyCode1}
                    />
               ))}
            </Box>
        </Box>
    )
}
export default Dumb