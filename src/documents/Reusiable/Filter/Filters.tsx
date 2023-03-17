import { Box } from '@mui/system'
import React from 'react'
import { Typography } from '@mui/material'
import RangeSlider from './Range'
import Switches from './Switch'
import { SwitchesData, ForMore } from './config'

export type Props = {
    classes: any
    handleChange: (event: Event, newValue: number | number[]) => void
    value: number | any
    setPurchaseType: any
    setBrands: any
    setCondition: any
    category: any,
    brand: any
}

const Filters: React.FC<Props> =
    ({
         classes,
         value,
         handleChange,
         setPurchaseType,
         setBrands,
         setCondition,
         category,
         brand
     }) => (
        <Box className={classes.filterWrapper}>
            <Typography className={classes.filterType}>Narxi so&apos;mda</Typography>
            <Box>
                <Box className={classes.rangePrices}>
                    <Typography className={classes.price}>0</Typography>{' '} -
                    <Typography className={classes.price}>100,000</Typography>
                </Box>
                <RangeSlider value={value} handleChange={handleChange}/>
                <hr className={classes.hr}/>
                <Typography className={classes.filterType}>Barand bo&apos;yicha</Typography>
                <Box className={classes.selector}>
                    <input type="radio" name="brands" value={brand} onChange={() => setBrands('all')}/>
                    <span>Hamma brendlar</span>
                </Box>
                {category.map(({id, name}: any) =>
                    <Box key={id} className={classes.selector}>
                        <input type="radio" value={brand} id={name} name="brands" onChange={() => setBrands(name)}/>
                        <span>{name}</span>
                    </Box>
                )}
                <hr className={classes.hr}/>
                <hr className={classes.hr}/>
                {SwitchesData.map(({name, id}: { name: string, id: number }) =>
                    <Switches name={name} key={id} setPurchaseType={setPurchaseType}/>
                )}
                <hr className={classes.hr}/>
                <hr className={classes.hr}/>
                {ForMore.map(({id, name}) =>
                    <Box key={id} className={classes.selector}>
                        <input type="checkbox" onChange={() => setCondition(name)}/>
                        <span>{name}</span>
                    </Box>
                )}
                <hr className={classes.hr}/>
                {/*<Button className={classes.clear} type="submit" onClick={handleFilters}>Mahsulotlarni saralash</Button>*/}
                {/*<Button type="submit" onClick={handleFilters}>Filterni tozalash</Button>*/}
            </Box>
        </Box>
    )

export default Filters;