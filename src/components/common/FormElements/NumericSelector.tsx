
import Slider from '@mui/material/Slider';
import React from 'react'
import TextLabel from './TextLabel'

interface Props{
    title: String
}

const NumericSelector = ({title}: Props) => {

    const marks = [
        {
          value: 0,
          label: '0'
        },
        {
          value: 10,
          label: '1'
        },
        {
          value: 20,
          label: '2'
        },
        {
          value: 30,
          label: '3'
        },
        {
            value: 40,
            label: '4'
        },
        {
            value: 50,
            label: '5'
        },
        {
            value: 60,
            label: '6'
        },
        {
            value: 70,
            label: '7'
        },
        {
            value: 80,
            label: '8'
        },
        {
            value: 90,
            label: '9'
        },
        {
            value: 100,
            label: '10'
        }

      ];
      
      function valuetext(value: number) {
        return `${value}`;
      }
      function valueLabelFormat(value: number) {
        return marks.findIndex((mark) => mark.value === value);
      }


    return(     
        <React.Fragment>
            <TextLabel title={title}></TextLabel>
            <Slider
                aria-label="Daily Target"
                defaultValue={0}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                step={null}
                valueLabelDisplay="auto"
                marks={marks}
                sx={{'margin':'15px 5px 15px 5px'}}

            />
        </React.Fragment>    
     
    )
}

export default NumericSelector

/*
                sx = {{
                    '&.MuiSlider-root':{
                        color: 'var(--main-color,"#b657af")'
                    }
                }}
                */