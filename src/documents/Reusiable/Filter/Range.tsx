import Box from '@mui/material/Box';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const AirbnbSlider = styled(Slider)(({theme}) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {
}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const {children, ...other} = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar"/>
            <span className="airbnb-bar"/>
            <span className="airbnb-bar"/>
        </SliderThumb>
    );
}

const RangeSlider = ({value, handleChange}: any) => (
    <Box style={{maxWidth: '200px', margin: '10px auto'}}>
        <AirbnbSlider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={50000000}
            step={100000}
            slots={{thumb: AirbnbThumbComponent}}
            getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
            defaultValue={[20, 40]}
            color='primary'
        />
    </Box>
)
export default RangeSlider;