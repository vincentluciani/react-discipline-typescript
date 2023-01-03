import styles from './HabitBox.module.css'
import CollapsableBoxWithTitleWrapper from '../common/BoxWrappers/CollapsableBoxWithTitleWrapper'
import { useState } from 'react'
import AuthenticationContext from '../context/authenticationContext'
import { useContext } from 'react';
import WeekDaySelector from '../common/FormElements/WeekDaySelector'
import CheckBoxGroup from '../common/FormElements/CheckBoxGroup'
import TextInput from '../common/FormElements/TextInput'
import SaveButton from '../common/FormElements/SaveButton'
import DeleteButton from '../common/FormElements/DeleteButton'
import NumericSelector from '../common/FormElements/NumericSelector'
import Divider from '@mui/material/Divider';

interface HabitBoxProps {
    boxTitle: string;
}

const HabitBox = ({boxTitle }: HabitBoxProps) => {

    const [taskStatus,setTaskStatus] = useState('done')

    const [inputs,setInputs] = useState({
        title:"",
        isCritical:""
        })

    const context = useContext(AuthenticationContext);

    const loginStatus = (context.isLoggedIn) ? 'logged in' : 'logged out'

    const handleChange = (e:any) => {

        let newInput = {
            ...inputs,
            [e.target.name] : e.target.value
        }
        setInputs(newInput)
        console.log(inputs)
     }

    return (
        <CollapsableBoxWithTitleWrapper boxTitle={boxTitle} className={styles['habit-box']}>
            <TextInput title="Habit Title"></TextInput>

            <WeekDaySelector title="Applies to the following days of the week:" ></WeekDaySelector>
            <Divider />
            <NumericSelector title="Daily Target:"></NumericSelector>
            <Divider />
            <CheckBoxGroup checkBoxesList={[{title:"Critical"},{title:"Suspendable during sickness"},{title:"Suspendable during other cases"},{title:"Do you need a timer"}]}></CheckBoxGroup>
            <SaveButton></SaveButton>
            <DeleteButton></DeleteButton>
          </CollapsableBoxWithTitleWrapper>

    )
}

export default HabitBox