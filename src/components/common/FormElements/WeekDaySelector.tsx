import React from "react"
import styles from './WeekDaySelector.module.css'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextLabel from './TextLabel'

interface Props {
    title: String
}

const WeekDaySelector = ({title}:Props) => {

    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);
    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
      ) => {
        setFormats(newFormats);
      };

      return(
<React.Fragment>
                <TextLabel title="Applies to the following days of the week:"></TextLabel>
                <ToggleButtonGroup
                className="week-selector"
                value={formats}
                onChange={handleFormat}
                sx={{'margin-bottom':'15px'}}
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
</React.Fragment>)
}

export default WeekDaySelector

