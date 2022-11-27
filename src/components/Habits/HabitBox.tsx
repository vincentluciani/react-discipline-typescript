import styles from './HabitBox.module.css'
import CollapsableBoxWithTitleWrapper from '../common/BoxWrappers/CollapsableBoxWithTitleWrapper'
import { useState } from 'react'
import AuthenticationContext from '../context/authenticationContext'
import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

interface HabitBoxProps {
    boxTitle: string;
}

const HabitBox = ({boxTitle }: HabitBoxProps) => {

    const [taskStatus,setTaskStatus] = useState('done')

    const context = useContext(AuthenticationContext);

    const loginStatus = (context.isLoggedIn) ? 'logged in' : 'logged out'

    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
      ) => {
        setFormats(newFormats);
      };

    return (
        <CollapsableBoxWithTitleWrapper boxTitle={boxTitle} className={styles['habit-box']}>
            <FormControl fullWidth >
                <TextField fullWidth label="Habit Title"
                margin="normal"  />
            </FormControl>
                <div className={styles['form-element-label']}>Applies to the following days of the week:</div>
                <ToggleButtonGroup
                className="week-selector"
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
                
                >
                    <ToggleButton value="bold" aria-label="bold">
                        S
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        M
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        T
                    </ToggleButton>
                    <ToggleButton value="color" aria-label="color">
                    W
                    </ToggleButton>
                    <ToggleButton value="color" aria-label="color">
                    T
                    </ToggleButton>
                    <ToggleButton value="color" aria-label="color">
                    F
                    </ToggleButton>
                    <ToggleButton value="color" aria-label="color">
                    S
                    </ToggleButton>
                </ToggleButtonGroup>
            <FormGroup sx={{
    marginTop:'10px',
  }}>
                <FormControlLabel control={<Checkbox   sx={{
                        height:'33px',
    color: 'lightgrey',
    '&.Mui-checked': {
      color: 'var(--main-color,black)',
    },

  }}defaultChecked />} label="Need a timer" />
                <FormControlLabel control={<Checkbox   sx={{
    height:'33px',
    color: 'lightgrey',
    '&.Mui-checked': {
      color: 'var(--main-color,black)',
    },
  }}/>} label="Is critical" />
            </FormGroup>


            </CollapsableBoxWithTitleWrapper>

    )
}

export default HabitBox