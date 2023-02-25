import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import MainCart from '../../documents/Reusiable/MainCart/MainCart'

const Dumb = ({classes, query, categoryData, setProductId, getFilteredData}: any) => (
     <Box className={classes.categoryWrapper}>
            {/*<Typography className={classes.title}>Apple mahsulotlari <span className={classes.span}>230 ta mahsulot mavjud</span></Typography>*/}
            <Box className={classes.contentWrapper}>
                <Box className={classes.category}>
                    {categoryData.map(({id, imageUrl, name}: any) =>
                        <Box key={id} className={classes.categoryBox} onClick={() => setProductId(id)}>
                            <Box>
                                <img src={`https://nextstore.in/nextstore${imageUrl}`} alt='category_image' width={query ? 130 : 180} height={query ? 100 : 134}
                                className={classes.image}
                                />
                            </Box>
                            <Typography className={classes.name}>{name}</Typography>
                        </Box>
                    )}
                </Box>
                <Box className={classes.productWrapper}>
                    <MainCart mainData={getFilteredData}/>
                </Box>
            </Box>
        </Box>
)
export default Dumb