import {styled} from '@mui/material'
import {TextField} from 'mui-rff'

export const CssTextField = styled(TextField)(({}) => ({
    width: '100%',
    height: '100%',
    '& label.Mui-focused': {
        color: 'rgba(0, 0, 0, 0.4)',
    },
    '& input.MuiOutlinedInput-input': {
        color: 'rgba(0, 0, 0, 0.4)',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(0, 0, 0, 0.4)',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        color: 'rgba(0, 0, 0, 0.4)',
        '& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.4)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.4)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.4)',
        },
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none",
    },
}));
