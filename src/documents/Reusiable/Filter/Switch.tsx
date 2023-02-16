import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = {inputProps: {'aria-label': 'Switch demo'}};

export default function Switches({name}: string | any) {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '250px'}}>
            <span style={{fontSize: '14px'}}>{name}</span>
            <Switch {...label}  />
        </div>
    );
}