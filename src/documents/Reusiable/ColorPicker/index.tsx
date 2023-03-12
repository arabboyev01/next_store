import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect } from 'react'
import axios from 'axios'
import { apiAddress } from '../../../../config'
import {useState} from "react"

const ColorPicker = ({color, setColor, dataID}: any) => {

    const [dataColor, setDataColor] = useState([])
    const handleChange = (event: SelectChangeEvent) => {
        setColor(event.target.value);
    };

    useEffect(() => {
        axios.get(`${apiAddress}/product/${dataID}`).then(res => {
            setDataColor(res.data.productColorDTOS)
        }).catch(err => console.log(err))

    }, [dataID])


    return (
        <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={color}
                onChange={handleChange}
                label="Age"
            >
                {dataColor?.map(({color, name, id}: any) =>
                    <MenuItem value={color} key={id}>{name}</MenuItem>
                )}
            </Select>
        </FormControl>
    )
}
export default ColorPicker