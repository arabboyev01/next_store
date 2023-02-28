import { Box } from '@mui/system'
import React from 'react'
import { Button, Typography } from '@mui/material'
import RangeSlider from './Range'
import Switches from './Switch'
import { SwitchesData, ForMore, Brands } from './config'
import { Form } from 'react-final-form'

export type Props = {
    classes: any
    handleChange: (event: Event, newValue: number | number[]) => void
    value: number | any
    setPurchaseType: any
    setBrands: any
    setCondition: any
    handleFilters: any
    handleFilterProducts: any
}

const Filters: React.FC<Props> = ({
                                      classes, value, handleChange,
                                      setPurchaseType,
                                      setBrands,
                                      setCondition,
                                      handleFilters,
                                      handleFilterProducts
                                  }) => (
    <Box className={classes.filterWrapper}>
        <Typography className={classes.filterType}>Narxi so&apos;mda</Typography>
        <Form
            onSubmit={handleFilterProducts}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit} noValidate style={{width: '100%'}}>
                    <Box>
                        <Box className={classes.rangePrices}>
                            <Typography className={classes.price}>0</Typography>{' '} -
                            <Typography className={classes.price}>100,000</Typography>
                        </Box>
                        <RangeSlider value={value} handleChange={handleChange}/>
                        <hr className={classes.hr}/>
                        <Typography className={classes.filterType}>Barand bo&apos;yicha</Typography>
                        {Brands.map(({id, name}) =>
                            <Box key={id} className={classes.selector}>
                                <input type="checkbox" onChange={() => handleFilters(name)}/>
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
                        <Button className={classes.clear} type="submit">Mahsulotlarni saralash</Button>
                    </Box>
                </form>
            )}
        />
    </Box>
)
export default Filters;