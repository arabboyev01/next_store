import { Box } from '@mui/system'
import style from "./catalog.style"
import { Typography } from '@mui/material'
const CatalogDescription = ({categoryChild, getCatalogData}: any) => {
    const classes = style()

    return (
        <Box className={classes.catalogDescWrapper}>
            <Box className={classes.categorySubTitles}>
                <Typography className={classes.descTitle}>Brendlar</Typography>
                {categoryChild.map(({id, name}: any) =>
                 <Typography className={classes.subtitle} key={id} onClick={() => getCatalogData(id)}>
                     {name} Salom</Typography>
                )}
            </Box>
        </Box>
    )
}
export default CatalogDescription