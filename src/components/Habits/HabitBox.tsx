import styles from './HabitBox.module.css'
import CollapsableBoxWithTitleWrapper from '../common/BoxWrappers/CollapsableBoxWithTitleWrapper'
import { useState } from 'react'
import AuthenticationContext from '../context/authenticationContext'
import { useContext } from 'react';
import WeekDaySelector from '../common/FormElements/WeekDaySelector'
import CheckBoxGroup from '../common/FormElements/CheckBoxGroup'
import TextInput from '../common/FormElements/TextInput'
import SaveButton from '../common/FormElements/SaveButton'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


interface HabitBoxProps {
    boxTitle: string;
}

const HabitBox = ({boxTitle }: HabitBoxProps) => {

    const [taskStatus,setTaskStatus] = useState('done')

    const context = useContext(AuthenticationContext);

    const loginStatus = (context.isLoggedIn) ? 'logged in' : 'logged out'



    return (
        <CollapsableBoxWithTitleWrapper boxTitle={boxTitle} className={styles['habit-box']}>
            <TextInput title="Habit Title"></TextInput>
            <WeekDaySelector title="Applies to the following days of the week:" ></WeekDaySelector>
           
            <CheckBoxGroup checkBoxesList={[{title:"Critical"},{title:"Suspendable during sickness"},{title:"Suspendable during other cases"},{title:"Do you need a timer"}]}></CheckBoxGroup>
            <SaveButton></SaveButton>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </CollapsableBoxWithTitleWrapper>

    )
}

export default HabitBox