import styles from './HabitBox.module.css'
import BoxWrapper from '../wrappers/Box/BoxWrapper'
import { useState } from 'react'
import AuthenticationContext from '../context/authenticationContext'
import React, { useContext } from 'react';

const HabitBox = props => {

    const [taskStatus,setTaskStatus] = useState('done')

    const context = useContext(AuthenticationContext);

    const loginStatus = (context.isLoggedIn) ? 'logged in' : 'logged out'

    return (
        <BoxWrapper taskStatus={taskStatus} boxTitle={props.boxTitle} className={styles['habit-box']}>Text inside the box - {loginStatus}</BoxWrapper>
    )
}

export default HabitBox