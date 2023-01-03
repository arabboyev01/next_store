import {styled} from '@mui/material'
import {TextField, Select} from 'mui-rff'

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

export const CssSelectField = styled(Select)({

    height: '100%',
    borderRadius: '10px',

    '& .MuiFormLabel-root-MuiInputLabel-root': {
        color: 'rgba(0, 0, 0, 0.4)',
        maxWidth: 'calc(100% - 50px)'
    },
    '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.4)',
    },
    '& svg': {
        color: 'rgba(0, 0, 0, 0.4)',
    },
    '& .MuiInputBase-input': {
        borderRadius: '10px',
        color: 'rgba(0, 0, 0, 0.4)',
    },
    '&:hover': {
        '&& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.4)',
        }
    },
    '&:active': {
        '&& label': {
            maxWidth: 'calc(100% - 1px)',
        },
        '&& fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.4)',
        }
    }
});
