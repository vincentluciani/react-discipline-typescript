import styles from './HabitBox.module.css'
import BoxWrapper from '../wrappers/Box/BoxWrapper'
import { useState } from 'react'

const HabitBox = props => {

    const [taskStatus,setTaskStatus] = useState('done')

    return (
        <BoxWrapper taskStatus={taskStatus} boxTitle={props.boxTitle} className={styles['habit-box']}>Text inside the box</BoxWrapper>
    )
}

export default HabitBox