import { Box } from '@mui/system'
import MainLoader from '../MainLoader/MainLoader'
import PaymentTerm from '../Modal/PaymentTerm/PaymentTerm'
import ProductDetail from '../SingleProduct/ProductDetail/ProductDetail'
import ProductDescription from '../SingleProduct/ProductDescription/ProductDescription'
import Suggested from '../Suggested/Suggested'
import MainCart from '../MainCart/MainCart'
import MainCarousel from '../MainCarousel/MainCarousel'
import { SuggestedDataCarousel } from '../../DumbData/DumbData'
import ProductImage from '../SingleProduct/ProductImage/ProductImage'

const Dumb = ({classes, handleCLose, single, handleOpen, query, suggestedData, open, getProductColorImage, getImage, colorId}: any) => (
    <Box className={classes.singleProducts}>
        {single.length === 0 ? <Box className={classes.loader}><MainLoader/></Box>
            :
            <Box>
                <PaymentTerm open={open} handleCLose={handleCLose} price={single}/>
                <Box className={classes.productHeader}>
                    <Box className={classes.imageWrapper}>
                        <ProductImage getImage={getImage}/>
                    </Box>
                    <ProductDetail
                        handleOpen={handleOpen}
                        data={single}
                        getProductColorImage={getProductColorImage}
                        colorId={colorId}
                    />
                </Box>
            </Box>
        }

        <ProductDescription data={single}/>
        <Suggested/>

        <Box className={classes.suggested}>
            <MainCart mainData={suggestedData} carousel="carousel"/>
        </Box>

        <Box className={classes.carousel}>
            <MainCarousel
                data={SuggestedDataCarousel}
                height={query ? 433 : 320}
                bgColor="#FFE9BD" color="#000"
                sticky buttonText="Batafsil"
            />
        </Box>
    </Box>
)
export default Dumb;