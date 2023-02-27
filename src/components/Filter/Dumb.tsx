import { Box } from '@mui/system'
import Filters from '../../documents/Reusiable/Filter/Filters'
import MainCart from '../../documents/Reusiable/MainCart/MainCart'
import PaginationComponent from './Pagination/Pagination'

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
            {data.length === null ? 'Siz so\'ragan mahsulot bo\'yicha xech narsa topilmadi' :
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
