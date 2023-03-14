import { Box } from '@mui/system'
import Filters from '../../documents/Reusiable/Filter/Filters'
import MainCart from '../../documents/Reusiable/MainCart/MainCart'
import PaginationComponent from './Pagination/Pagination'
import HomePageLoader from '../../documents/Reusiable/MainLoader/HomePageLoader'

const Dumb =
    ({
         classes,
         value,
         handleChange,
         setPurchaseType,
         data,
         indexOfFirstPost,
         indexOfLastPost,
         handlePaginateData,
         quantityData,
         setBrands,
         setCondition,
        filtered
     }: any) => (
        <Box className={classes.mainWrapper}>
            <Box className={classes.filters}>
                <Filters
                    classes={classes}
                    value={value}
                    handleChange={handleChange}
                    setPurchaseType={setPurchaseType}
                    setBrands={setBrands}
                    setCondition={setCondition}
                />
            </Box>
            <Box className={classes.datas}>
                {data === undefined ? <HomePageLoader/> :
                    <MainCart mainData={!filtered.length ? data?.slice(indexOfFirstPost, indexOfLastPost) :
                        filtered?.slice(indexOfFirstPost, indexOfLastPost)}
                    />
                }
                <Box className={classes.pagination}>
                    {data?.length <= 11 ?
                        null :
                        <PaginationComponent handlePaginateData={handlePaginateData} quantity={quantityData}/>
                    }
                </Box>
            </Box>
        </Box>
    )

export default Dumb;
