import { Box } from '@mui/system'
import React, { ReactElement } from 'react'
import style from './description.style'

type Props = {
    id: number
    nameEn: string,
    nameRu: string,
    nameUz: string,
    paramId: number,
    productId: number,
    valueEn: string,
    valueRu: string,
    valueUz: string
}
export const Dumb:React.FC<Props> = ({id, nameEn, nameRu, nameUz, paramId, productId, valueEn, valueRu, valueUz}): ReactElement<any, any> | any => {
    return <Box key={id}>
        <Box>

        </Box>
    </Box>
}