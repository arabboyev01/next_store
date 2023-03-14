import { Box } from '@mui/system'
import style from "./catalog.style"
import { Typography } from '@mui/material'
const CatalogDescription = ({categoryChild, getCatalogData, productsId}: any) => {
    const classes = style()

    return (
        <Box className={classes.catalogDescWrapper}>
            <Box className={classes.categorySubTitles}>
                <Typography className={classes.descTitle}>Brendlar</Typography>
                {categoryChild.map(({id, name}: any) =>
                 <Typography className={productsId === id ? classes.active : classes.subtitle} key={id} onClick={() => getCatalogData(id)}>
                     {name} </Typography>
                )}
            </Box>
        </Box>
    )
}
export default CatalogDescription ;