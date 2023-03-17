import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = {inputProps: {'aria-label': 'Switch demo'}};

export default function Switches({name, setPurchaseType}: string | any) {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '250px', marginTop: '10px'}}>
            <span style={{fontSize: '14px'}}>{name}</span>
            <Switch {...label}  onChange={() => setPurchaseType(name)} size="small"/>
        </div>
    );
}