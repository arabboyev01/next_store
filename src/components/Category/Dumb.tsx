import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { CATEGORY_BUTTONS } from '../../documents/DumbData/DumbData'
import Image from 'next/image'
import MainCart from '../../documents/Reusiable/MainCart/MainCart'

const Dumb = ({classes, query, categoryData}: any) => (
     <Box className={classes.categoryWrapper}>
            <Typography className={classes.title}>Apple mahsulotlari <span className={classes.span}>230 ta mahsulot mavjud</span></Typography>
            <Box className={classes.contentWrapper}>
                <Box className={classes.category}>
                    {CATEGORY_BUTTONS.map(({id, image, category}) =>
                        <Box key={id} className={classes.categoryBox}>
                            <Box>
                                <Image src={image.src} alt='category_image' width={query ? 130 : 180} height={query ? 100 : 134}
                                className={classes.image}
                                />
                            </Box>
                            <Typography className={classes.name}>{category}</Typography>
                        </Box>
                    )}
                </Box>
                <Box className={classes.productWrapper}>
                    <MainCart mainData={categoryData}/>
                </Box>
            </Box>
        </Box>
)
export default Dumb