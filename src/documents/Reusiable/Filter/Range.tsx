import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const RangeSlider = ({value, handleChange}: any) => (
    <Box style={{maxWidth: '200px', margin: '10px auto'}}>
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={50000000}
            step={100000}
        />
    </Box>
)
export default RangeSlider;