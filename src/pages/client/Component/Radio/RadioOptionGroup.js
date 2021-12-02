import React , { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioOptionGroup(props) {
    const { listoption, onChange, name, value,  ...other } = props;

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        listoption ?
            <FormControl component="fieldset"  {...other}>
                <RadioGroup aria-label={name} name={name} value={value} onChange={handleChange}>
                    {listoption.map((item) =>
                        <FormControlLabel key={item._id} value={item.value} control={<Radio color="primary"/>} label={item.label} />
                    )}
                </RadioGroup>
            </FormControl> : <></>
    );
}