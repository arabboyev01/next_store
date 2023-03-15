import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

type Props = {
    categoryParent: any
    brand: any
    handleChangeParent: any
    handleChangeDirection: any
    classes: any
}
const CatalogDumb: React.FC<Props> = ({categoryParent, brand, handleChangeParent, handleChangeDirection, classes}) => (
    <Box>
        {categoryParent.map(({id, name}: any) =>
            <Accordion key={id}>
                <AccordionSummary
                    expandIcon={<KeyboardArrowRightIcon style={{color: '#000'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    onClick={() => handleChangeParent(id)}
                    sx={{gap: 0, margin: 0, padding: '0 20px'}}
                >
                    <Typography onClick={() => handleChangeParent(id)} className={classes.chapters}>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {brand.map(({name, id}: any) =>
                        <Typography key={id} onClick={handleChangeDirection} className={classes.text}>{name}</Typography>
                    )}
                </AccordionDetails>
            </Accordion>
        )}
    </Box>
)
export default CatalogDumb