import { Box } from '@mui/system'
import Filters from '../../documents/Reusiable/Filter/Filters'
import MainCart from '../../documents/Reusiable/MainCart/MainCart'
import PaginationComponent from './Pagination/Pagination'

const Dumb =
    ({
         classes,
         value,
         handleChange,
         setPurchaseType,
         indexOfFirstPost,
         indexOfLastPost,
         handlePaginateData,
         quantityData,
         setBrands,
         setCondition,
         filtered,
         category,
         brand,
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
                    category={category}
                    brand={brand}
                />
            </Box>
            <Box className={classes.datas}>
                <MainCart mainData={filtered?.slice(indexOfFirstPost, indexOfLastPost)}/>
                <Box className={classes.pagination}>
                    <PaginationComponent
                        handlePaginateData={handlePaginateData}
                        quantity={quantityData}
                        data={filtered}
                    />
                </Box>
            </Box>
        </Box>
    )

export default Dumb;
