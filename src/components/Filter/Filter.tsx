import React from 'react'
import { Box } from '@mui/system'
import Filters from '../../documents/Reusiable/Filter/Filters'
import style from "./filters.style"
const FilterComponent = () => {
    const classes = style();

    return(
        <Box>
            <Filters classes={classes} />
        </Box>
    )
}
export default FilterComponent