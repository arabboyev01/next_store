import { Box } from '@mui/system'
import Filters from '../../documents/Reusiable/Filter/Filters'
import MainCart from '../../documents/Reusiable/MainCart/MainCart'
import PaginationComponent from './Pagination/Pagination'
import { Typography } from '@mui/material'

const Dumb = ({
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
                  handleFilters
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
                handleFilters={handleFilters}
            />
        </Box>
        <Box className={classes.datas}>
            {data.length === 0 ?
                <Box style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: '60vh'}}>
                    <Typography>Siz so&apos;ragan mahsulot bo&apos;yicha xech narsa topilmadi</Typography></Box> :
                <MainCart mainData={data.slice(indexOfFirstPost, indexOfLastPost)}/>
            }
            <Box className={classes.pagination}>
                {data.length <= 11 ?
                    null :
                    <PaginationComponent handlePaginateData={handlePaginateData} quantity={quantityData}/>
                }
            </Box>
        </Box>
    </Box>
)

export default Dumb;
