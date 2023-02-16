import { Box } from '@mui/system'
import React from 'react'

export type Props = {
    classes: any
}
const Filters: React.FC<Props> = ({classes}) => (
    <Box className={classes.filterWrapper}>

    </Box>
)
export default Filters;